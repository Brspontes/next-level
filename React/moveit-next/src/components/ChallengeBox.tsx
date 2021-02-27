import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/challengeBox.module.css'

export function ChallengeBox() {
    const { activeChellange, resetChallenge } = useContext(ChallengesContext)

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
                        <button type="button" className={styles.chellangeFailButton} onClick={resetChallenge}>Falhei</button>
                        <button type="button" className={styles.successed}>Completei</button>
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