import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import FileUploader from "../components/FileUploader"; 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Decentralized Cloud Storage System using Blockchain</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width= {2000}
            height={500}
            priority
          />
        </div>

        <div className={styles.grid}>
          <Link href='./signup.tsx'>
            <h2 className={inter.className}>
              Signup <span>-&gt;</span>
            </h2>
          </Link>
            <a className={inter.className}>
            </a>
          <Link href='/'>
            <h2 className={inter.className}>
              Login <span>-&gt;</span>
            </h2>
          </Link>
            <a className={inter.className}>
            </a>
          <Link href='./FileUpload.tsx'>
            <h2 className={inter.className}>
              File Upload <span>-&gt;</span>
            </h2>
          </Link>
          <a className={inter.className}></a>
          <Link href='/'>
            <h2 className={inter.className}>
              Files Access <span>-&gt;</span>
            </h2>
          </Link>
          <a className={inter.className}></a>
        </div>
      </main>
    </>
  )
}
