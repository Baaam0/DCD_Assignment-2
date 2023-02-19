import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/cloth_data'
import records from '../@data/runway'
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
          {
            record.map((rec, index) => {
              return(
               
                // <div key={index}>
                //   <div>{rec.item_id}</div>
                //   <div>{rec.size}</div>
                //   <div>{rec.fit == "fit"? <h3>{rec.fit}</h3>: <p>{rec.fit}</p>}</div>
                 
                // </div>
                <>
                  {rec.fit == "fit" ? <div key={index}>
                    <div>{rec.height}</div>
                    <div>{rec["bra size"]}</div>
                    <div>{rec["cup size"]}</div>
                  </div> : <></>
                  }
                 </>
              )
            }
          )}         
      </main>
    </>
  )
}
