import { createContext, ReactNode, useState, useEffect } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallengesProviderProps {
    children: ReactNode
}

interface ChallengesContextData {
    level: number
    currentExperience: number
    challengesCompleted: number
    experienceToNextLevel: number
    activeChellange: Challenge
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
    completeChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setcurrentExperience] = useState(0)
    const [challengesCompleted, setchallengesCompleted] = useState(0)
    const [activeChellange, setActiveChellange] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4 ,2)

    //Função executa uma unica vez quando componente exibido em tela
    useEffect(() => {
        Notification.requestPermission()
    }, [])

    function levelUp() {
        setLevel(level + 1)
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
            resetChallenge,
            experienceToNextLevel,
            completeChallenge
             }}>
            { children } 
        </ChallengesContext.Provider> 
    )
}