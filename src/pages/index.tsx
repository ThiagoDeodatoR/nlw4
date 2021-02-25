import Head from 'next/head';

import ChallengesDone from "../components/ChallengesDone";
import ChallengeBox from "../components/ChallengeBox";
import Countdown from "../components/Countdown";
import ExpBar from "../components/Expbar";
import Profile from "../components/Profile";

import styles from '../styles/pages/Home.module.css';


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
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>  
  )
}
