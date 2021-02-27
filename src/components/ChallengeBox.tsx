import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';

import styles from '../styles/components/ChallengeBox.module.css';


const ChallengeBox: React.FC = () => {
    const {challengeAct, resetChallengeBox, completedChallenge} = useContext(ChallengesContext);
    const { resetCountDown } = useContext(CountDownContext);

    function handleFailedChallenge() {
        resetChallengeBox();
        resetCountDown();
    }

    function handleCompletedChallenge() {
        completedChallenge();
        resetCountDown();
    }

    return (
      <div className={styles.challengeBoxContainer}>
          {challengeAct ? (
              <div className={styles.challengeAct}>
                  <header>Ganhe {challengeAct.amount} xp</header>
                  <main>
                      <img src={`icons/${challengeAct.type}.svg`} alt={challengeAct.type}/>
                      <strong>Novo desafio</strong>
                      <p>{challengeAct.description}</p>
                  </main>
                  <footer>
                      <button 
                        type="button"
                        className={styles.challengeFailedBtn}
                        onClick={handleFailedChallenge}
                      >
                          Falhei
                      </button>
                      <button 
                        type="button"
                        className={styles.challengeCompletedBtn}
                        onClick={handleCompletedChallenge}
                      >
                          Completei
                      </button>
                  </footer>

              </div>
          ) : (
            <div className={styles.challengeNotAct}>
                <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Finalize desafios para ganhar experiência e avançar de leve.
                </p>
            </div>
          )}
      </div>
  );
}

export default ChallengeBox;