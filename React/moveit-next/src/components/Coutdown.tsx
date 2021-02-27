import { useState, useEffect } from 'react'
import styles from '../styles/components/coutdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Coutdown() {
    const [time, setTime] = useState(0.05 * 60)
    const [isActive, setIsActive] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    const [hasFineshed, setHasFineshed] = useState(false)

    function startCountdown () {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.05 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time -1)
            }, 1000);
        } else if (isActive && time === 0){
            setHasFineshed(true)
            setIsActive(false)
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.coutdownContainer}>
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
            { hasFineshed ? (
                <button className={styles.countdownButton} disabled>
                    Ciclo Encerrado <img src="icons/checkOk.svg" alt="icoOk"/>    
                </button>
            ) : 
            (
                <>
                    { isActive ? (
                    <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                        Abandonar Ciclo
                    </button>
            ):( 
                    <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                        Iniciar um ciclo
                    </button>
            )}  
                </>
            )}
        </div>
    )
}