import { create } from 'domain'
import { createContext, ReactNode, useState } from 'react'
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
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setcurrentExperience] = useState(0)
    const [challengesCompleted, setchallengesCompleted] = useState(0)
    const [activeChellange, setActiveChellange] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4 ,2)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChellange(challenge)
    }

    function resetChallenge() {
        setActiveChellange(null)
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
            experienceToNextLevel
             }}>
            { children } 
        </ChallengesContext.Provider> 
    )
}