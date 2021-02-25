import React from 'react';
import styles from '../styles/components/ChallengesDone.module.css'

const ChallengesDone: React.FC = () => {
  return (
      <div className={styles.challengesDoneContainer}>
          <span>Desafios Completos</span>
          <span>05</span>
      </div>
  );
}

export default ChallengesDone;