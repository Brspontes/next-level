import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/profile.module.css'

export function Profile () {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/brspontes.png" alt="Brian"/>
            <div>
                <strong>Brian Robert</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level { level }
                </p>
            </div>
        </div>
    )
}