import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChellenges } from '../components/CompletedChallenges'
import { Coutdown } from '../components/Coutdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'
import  styles  from '../styles/pages/Home.module.css'
import { GetServerSideProps } from 'next'
import { ChallengesProvider } from '../contexts/ChallengeContext'

interface HomePropos {
  level: number
  currentExperience: number
  challengeCompleted: number
}

export default function Home(props) {
  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengeCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Início | Move.It</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChellenges />
              <Coutdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}