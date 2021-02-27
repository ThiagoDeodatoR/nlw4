import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/LvlUpModal.module.css';

const LvlUpModal: React.FC = () => {
    const { level, closeLvlUpModal } = useContext(ChallengesContext);

    return (
      <div className={styles.lvlUpModalOverlay}>
          <div className={styles.lvlUpModalContainer}>
              <header>Level {level}</header>
              <strong>Parabéns</strong>
              <p>Você alcançou um novo level</p>
              <button type="button" onClick={closeLvlUpModal}>
                  <img src="/icons/close.svg" alt="Fechar Modal"/>
              </button>
          </div>
      </div>
  );
}

export default LvlUpModal;