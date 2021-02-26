import React, { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengesDone.module.css'

const ChallengesDone: React.FC = () => {
  const {challengesDone} = useContext(ChallengesContext);
  
  const challengesDoneAmount = String(Math.floor(challengesDone)).padStart(2, '0').split('');

  return (
      <div className={styles.challengesDoneContainer}>
          <span>Desafios Completos</span>
          <span>{challengesDoneAmount}</span>
      </div>
  );
}

export default ChallengesDone;