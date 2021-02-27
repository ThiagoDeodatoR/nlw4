import Head from 'next/head';
import { GetServerSideProps } from 'next'

import ChallengesDone from "../components/ChallengesDone";
import ChallengeBox from "../components/ChallengeBox";
import Countdown from "../components/Countdown";
import ExpBar from "../components/Expbar";
import Profile from "../components/Profile";

import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentXp: number;
  challengesDone: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level= {props.level} 
      currentXp= {props.currentXp} 
      challengesDone= {props.challengesDone}
    >
      <div className={styles.container}>
        <Head>
          <title>Move It</title>
        </Head>
        <ExpBar/>
        
        <CountDownProvider>
          <section>
            <div>
              <Profile/>
              <ChallengesDone/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountDownProvider>
      </div>  
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentXp, challengesDone } = ctx.req.cookies
  
  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      challengesDone: Number(challengesDone)
    }
  }

}
