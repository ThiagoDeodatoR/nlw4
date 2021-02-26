import React, {useState, useEffect, useContext} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import {IoMdPlay} from 'react-icons/io';
import {MdCheck} from 'react-icons/md';
import {CgClose} from 'react-icons/cg';

import styles from '../styles/components/Countdown.module.css';


let countDownTimeOut : NodeJS.Timeout;

const Countdown: React.FC = () => {
    const { startNewChallenge } = useContext(ChallengesContext);
    
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    useEffect(() => {
        if(isActive && time > 0){
            countDownTimeOut = setTimeout(() => {
                setTime(time -1);
            }, 1000)
        }else if (isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]) 

    function startCountDown () {
        setIsActive(true);
    }

    function resetCountDown () {
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(0.1 * 60);
    }

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