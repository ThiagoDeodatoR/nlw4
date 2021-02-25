import React from 'react';
import styles from '../styles/components/ExpBar.module.css';

const ExpBar: React.FC = () => {
  return (
      <header className={styles.expBar}>
          <span>0 xp</span>
          <div>
            <div className={styles.expProgression} style={{width: '50%'}} />
            <span className={styles.expCurrent} style={{left: '50%'}}>
              300 xp
            </span>
          </div>
          <span>600 xp</span>
      </header>
  )
}

export default ExpBar;