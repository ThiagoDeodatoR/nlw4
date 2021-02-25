import React, {useState, useEffect} from 'react';
import styles from '../styles/components/Countdown.module.css'

const Countdown: React.FC = () => {

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);
    const [btnName, setBtnName] = useState('Iniciar um ciclo')

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    useEffect(() => {
        if(active && time > 0){
            setTimeout(() => {
                setTime(time -1);
            }, 1000)
        }
    }, [active, time]) 

    function startCountDown () {
        setActive(!active);
        if(btnName === "Iniciar um ciclo") {
            setBtnName("Parar");
        }else {
            setBtnName("Iniciar um ciclo");
        }
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
        <button 
            type="button" 
            className={styles.countDownBtn}
            onClick={startCountDown}
        >
            {btnName}
        </button>
      </div>    
  );
}

export default Countdown;