import Head from 'next/head'
import { CompletedChellenges } from '../components/CompletedChallenges'
import { Coutdown } from '../components/Coutdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import  styles  from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.It</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChellenges />
          <Coutdown />
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}
