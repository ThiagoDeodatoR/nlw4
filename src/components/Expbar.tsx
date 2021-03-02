import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExpBar.module.css';

const ExpBar: React.FC = () => {
  const { currentXp, xpToNextLvl } = useContext(ChallengesContext);

  const percentToNextLvl = Math.round((currentXp * 100) / xpToNextLvl);

  return (
    <header className={styles.expBar}>
      <span>0 xp</span>
      <div>
        {percentToNextLvl != 0 ? (
          <>
            <div className={styles.expProgression} style={{ width: `${percentToNextLvl}%` }} />
            <span className={styles.expCurrent} style={{ left: `${percentToNextLvl}%` }} >
              {currentXp} xp
                </span>
          </>) : null
        }
      </div>
      <span>{xpToNextLvl} xp</span>
    </header>
  )
}

export default ExpBar;