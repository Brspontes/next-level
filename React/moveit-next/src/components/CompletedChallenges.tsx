import styles from '../styles/components/completedChellenges.module.css'

export function CompletedChellenges() {
    return (
        <div className={styles.completedChellengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}