import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/cloth_data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(record);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          {
            record.map((rec, index) => {
              return(
                <div key={index}>
                  <div>{rec.item_id}</div>
                  <div>{rec.size}</div>
                  <div>{rec.size}</div>
                </div>
              )
            }
          )}         
        </div> 
      </main>
    </>
  )
}
