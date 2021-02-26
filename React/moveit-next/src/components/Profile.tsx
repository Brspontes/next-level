import styles from '../styles/components/profile.module.css'

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/brspontes.png" alt="Brian"/>
            <div>
                <strong>Brian Robert</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>
    )
}