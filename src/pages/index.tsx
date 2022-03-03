import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ProfileCard from '../components/ProfileCard';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} dark`}>
      <Head>
        <title>{ 'Sant\'s Portifoly' }</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfileCard />

      <main className={styles.main}>

        <h1 className={styles.title}>
          Bem Vindo(a)!
        </h1>

        <nav className={styles.nav}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn</h2>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples</h2>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy</h2>
          </a>
        </nav>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
