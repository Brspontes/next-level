import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/coutdown.module.css'

export function Coutdown() {

    const { 
        minutes, 
        seconds, 
        hasFineshed, 
        isActive, 
        resetCountdown, 
        startCountdown } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    
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