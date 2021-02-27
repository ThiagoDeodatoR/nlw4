import React, {useContext} from 'react';
import { CountDownContext } from '../contexts/CountDownContext';

import {IoMdPlay} from 'react-icons/io';
import {MdCheck} from 'react-icons/md';
import {CgClose} from 'react-icons/cg';

import styles from '../styles/components/Countdown.module.css';



const Countdown: React.FC = () => {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountDown, 
        resetCountDown 
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            
            {hasFinished ? (
            <button 
                className={styles.countDownBtn}
                disabled
            >
                Ciclo encerrado <i><MdCheck/></i>
            </button>
            ) : (
                <>
                    { isActive ? (
                    <button 
                        type="button" 
                        className={`${styles.countDownBtn} ${styles.countDownBtnAct}`}
                        onClick={resetCountDown}
                    >
                        Abandonar ciclo <i><CgClose/></i>
                    </button>) : (
                    <button 
                        type="button" 
                        className={styles.countDownBtn}
                        onClick={startCountDown}
                    >
                        Iniciar um ciclo <i><IoMdPlay/></i>
                    </button>
                    ) }
                </>
            )}
        </div>    
  );
}

export default Countdown;