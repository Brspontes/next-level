import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/profile.module.css'

export function Profile () {
    const { level, theme } = useContext(ChallengesContext)
    return (
        <div className={theme === 'dark' ? styles.profileContainerDark : styles.profileContainer}>
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