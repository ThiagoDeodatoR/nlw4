import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

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
}

interface ChallengesProviderProps {
    children : ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData );

export function ChallengesProvider ({ children } : ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentXp, setCurrentXp] = useState(0);
    const [challengesDone, setChallengesDone] = useState(0);
    const [challengeAct, setChallengeAct] = useState(null);
    
    const xpToNextLvl = Math.pow((level + 1) * 4, 2);

    function levelUp () {
        setLevel(level +1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setChallengeAct(challenge);
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
                completedChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}