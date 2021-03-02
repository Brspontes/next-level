import { useState, useEffect, useContext } from 'react'
import styles from '../styles/components/footerDarkMode.module.css'
import { ButtonGroup, Button } from 'reactstrap'
import { ChallengesContext } from '../contexts/ChallengeContext';

export function FooterDarkMode() {
    const [rSelected, setRSelected] = useState(null);
    const { darkTheme, lightTheme} = useContext(ChallengesContext)
    useEffect(() => {
        if(rSelected === 2) {
            darkTheme()
        }
        else {
            lightTheme()
        }
    }, [rSelected])

    return (
        <div className={styles.footerBar}>
            <ButtonGroup>
              <Button className={styles.buttonLight}
                onClick={() => setRSelected(1)} 
                active={rSelected === 1}>Light</Button>
              <Button className={styles.buttonDark}
                onClick={() => setRSelected(2)} 
                active={rSelected === 2}>Dark</Button>
            </ButtonGroup>
        </div>
    )
}