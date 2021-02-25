import ChallengesDone from "../components/ChallengesDone";
import Countdown from "../components/Countdown";
import ExpBar from "../components/Expbar";
import Profile from "../components/Profile";

import styles from '../styles/pages/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move It</title>
      </Head>
      <ExpBar/>
      <section>
        <div>
          <Profile/>
          <ChallengesDone/>
          <Countdown/>
        </div>
      </section>
    </div>  
  )
}
