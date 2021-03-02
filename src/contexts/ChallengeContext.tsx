import { createContext, ReactNode, useState, useEffect } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal'

interface Challenge {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallengesProviderProps {
    children: ReactNode
    level: number
    currentExperience: number
    challengeCompleted: number
}

interface ChallengesContextData {
    level: number
    currentExperience: number
    challengesCompleted: number
    experienceToNextLevel: number
    activeChellange: Challenge
    theme: string
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
    completeChallenge: () => void
    closeLevelModal: () => void
    darkTheme: () => void
    lightTheme: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ 
    children,
    ...rest
     }: ChallengesProviderProps) {

    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setcurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setchallengesCompleted] = useState(rest.challengeCompleted ?? 0)
    const [activeChellange, setActiveChellange] = useState(null)
    const [isLevelUpModalOpen, setisLevelUpModalOpen] = useState(false)
    const [isLightTheme, setIsLightTheme] = useState(true)
    const [theme, setTheme] = useState('light')

    const experienceToNextLevel = Math.pow((level + 1) * 4 ,2)

    //Função executa uma unica vez quando componente exibido em tela
    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {

    }, [isLightTheme])
    
    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
    }, [level, currentExperience, challengesCompleted])
    
    function darkTheme() {
        setIsLightTheme(false)
        setTheme('dark')
    }

    function lightTheme() {
        setIsLightTheme(true)
        setTheme('light')
    }

    function closeLevelModal(){
        setisLevelUpModalOpen(false)
    }

    function levelUp() {
        setLevel(level + 1)
        setisLevelUpModalOpen(true)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        new Audio('/notification.mp3').play()
        if(Notification.permission === 'granted')
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount} XP`
            })

        setActiveChellange(challenge)
    }

    function resetChallenge() {
        setActiveChellange(null)
    }

    function completeChallenge() {
        if(!activeChellange)
            return

        const { amount } = activeChellange
        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience = experienceToNextLevel
            levelUp()
        }
        
        setcurrentExperience(finalExperience)
        setActiveChellange(null)
        setchallengesCompleted(challengesCompleted + 1)
    }

    return (
        <ChallengesContext.Provider value={{ 
            level, 
            levelUp, 
            currentExperience, 
            challengesCompleted, 
            startNewChallenge, 
            activeChellange,
            theme,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge,
            closeLevelModal,
            darkTheme,
            lightTheme
             }}>
            { children } 
            { isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider> 
    )
}