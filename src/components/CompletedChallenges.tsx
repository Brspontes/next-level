import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/completedChellenges.module.css'

export function CompletedChellenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.completedChellengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}