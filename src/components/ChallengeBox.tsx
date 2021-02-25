import React from 'react';
import styles from '../styles/components/ChallengeBox.module.css';


const hasActChallenge = true;

const ChallengeBox: React.FC = () => {
  return (
      <div className={styles.challengeBoxContainer}>
          {hasActChallenge ? (
              <div className={styles.challengeAct}>
                  <header>Ganhe 400 xp</header>
                  <main>
                      <img src="icons/body.svg" alt="Work Out"/>
                      <strong>Novo desafio</strong>
                      <p>Levante e faça 20 abdominais</p>
                  </main>
                  <footer>
                      <button 
                        type="button"
                        className={styles.challengeFailedBtn}
                      >
                          Falhei
                      </button>
                      <button 
                        type="button"
                        className={styles.challengeCompletedBtn}
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