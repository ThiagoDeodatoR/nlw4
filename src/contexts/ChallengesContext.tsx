import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import LvlUpModal from '../components/LvlUpModal';

interface Challenge {
    type : 'body' | 'eye';
    description: string;
    amount : number;
}

interface ChallengesContextData {
    level : number; 
    currentXp : number; 
    xpToNextLvl : number;
    challengesDone : number; 
    challengeAct : Challenge;
    levelUp : () => void;
    startNewChallenge : () => void; 
    resetChallengeBox : () => void;
    completedChallenge : () => void;
    closeLvlUpModal : () => void;
}

interface ChallengesProviderProps {
    children : ReactNode;
    level: number;
    currentXp: number;
    challengesDone: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData );

export function ChallengesProvider ({ children, ...rest } : ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentXp, setCurrentXp] = useState(rest.currentXp ?? 0);
    const [challengesDone, setChallengesDone] = useState(rest.challengesDone ?? 0);
    const [challengeAct, setChallengeAct] = useState(null);
    const [isLvlUpModalOpen, setIsLvlUpModalOpen] = useState(false);
    
    const xpToNextLvl = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentXp', String(currentXp));
        Cookies.set('challengesDone', String(challengesDone));
    }, [level, currentXp, challengesDone]);

    useEffect(() => {
        Notification.requestPermission();
    }, []);
    
    function levelUp () {
        setLevel(level + 1);
        setIsLvlUpModalOpen(true);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setChallengeAct(challenge);



        if(Notification.permission === 'granted') {
            new Audio('/notification.mp3').play();
            new Notification('Novo Desafio 🎉', {
                body: `Valendo ${challenge.amount} xp!`
            })
        }
    }

    function resetChallengeBox() {
        setChallengeAct(null);
    }

    function completedChallenge() {
        if(!challengeAct){
            return;
        }

        const { amount } = challengeAct;
        let finalXp = currentXp + amount;

        if (finalXp >= xpToNextLvl) {
            finalXp = finalXp - xpToNextLvl;
            levelUp();
        }
        setCurrentXp(finalXp);
        setChallengeAct(null);
        setChallengesDone(challengesDone +1);
    }

    function closeLvlUpModal() {
        setIsLvlUpModalOpen(false);
    }

    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                currentXp, 
                challengesDone,
                xpToNextLvl, 
                levelUp,
                startNewChallenge,
                challengeAct,
                resetChallengeBox,
                completedChallenge,
                closeLvlUpModal
            }}
        >
            {children}
            {isLvlUpModalOpen && <LvlUpModal/>}
        </ChallengesContext.Provider>
    );
}