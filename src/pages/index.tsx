import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MainNav from '../components/MainNav';

import ProfileCard from '../components/ProfileCard';
import ProjectPost from '../components/ProjectPost';
import ProjData from '../PROJECTS_DATA';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{'Sant\'s Portifoly'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfileCard />

      <MainNav />

      <main>
        <section className='projects'>
          {ProjData.map((proj) => (<ProjectPost {...proj} />)) }
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
