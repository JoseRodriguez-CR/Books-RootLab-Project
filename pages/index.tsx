import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>RootLab |  NextJS Books (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to  the RootLab
        </h1>

        <p className=''>
          <code className=''>Typescript</code>
        </p>

      </main>

      <footer className=''>
        <a
          href="https:/rootstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className=''>
            Rootstack
          </span>
        </a>
      </footer>
    </div>
  )
}
