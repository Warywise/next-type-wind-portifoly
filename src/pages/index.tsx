import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import ProfileCard from '../components/ProfileCard';
import Image from 'next/image';
import HeaderNav from '../components/HeaderNav';
import ProjectPost from '../components/ProjectPost';
import ProjData from '../PROJECTS_DATA';

import styles from '../styles/Home.module.scss';

export const getStaticProps: GetStaticProps = async (_context) => {
  return {
    props: { value: 1 }
  };
}

const Home: NextPage<{ value: number }> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{'Sant\'s Portifoly'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProfileCard />

      <HeaderNav />

      <main>
        <section className='projects'>
          <h5>Projetos:</h5>
          {ProjData.map((proj, ind) => (
            <ProjectPost key={`projct${ind}`} {...proj} />
          ))}
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
