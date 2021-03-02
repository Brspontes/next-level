import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/completedChellenges.module.css'

export function CompletedChellenges() {
    const { challengesCompleted, theme } = useContext(ChallengesContext)
    return (
        <div className={theme === 'dark' ? styles.completedChellengesContainerDark : styles.completedChellengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}