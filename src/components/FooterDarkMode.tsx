import { useState, useEffect, useContext } from 'react'
import styles from '../styles/components/footerDarkMode.module.css'
import { ChallengesContext } from '../contexts/ChallengeContext';
import  DarkModeToggle from 'react-dark-mode-toggle'
import useDarkMode from 'use-dark-mode'

export function FooterDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(()=>false)
    const darkMode = useDarkMode(false)
    
    const { darkTheme, lightTheme } = useContext(ChallengesContext)

    useEffect(()=>{
        darkMode.toggle()
        
        if(!darkMode.value)
            darkTheme()
        else
            lightTheme()
            
            

    },[isDarkMode])

    return (
        <label className={styles.footerBar}>
            <DarkModeToggle 
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}/>
        </label>
    )
}