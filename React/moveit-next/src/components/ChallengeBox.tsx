import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/challengeBox.module.css'

export function ChallengeBox() {
    const { activeChellange, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSuccesseded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChellange ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChellange.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChellange.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChellange.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.chellangeFailButton} onClick={handleChallengeFailed}>Falhei</button>
                        <button type="button" className={styles.successed} onClick={handleChallengeSuccesseded}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            ) }
        </div>
    )
}