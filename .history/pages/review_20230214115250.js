import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import records from '../data/runway_data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main2}>
          {
            records.map((rec, index) => {
              return(
               
                // <div key={index}>
                //   <div>{rec.item_id}</div>
                //   <div>{rec.size}</div>
                //   <div>{rec.fit == "fit"? <h3>{rec.fit}</h3>: <p>{rec.fit}</p>}</div>
                 
                // </div>
                <>
                  {rec.rating > 8 ? <div key={index}>
                    <div className={styles.cont}>
                      <div className={styles.contTop}>
                        <div>{rec.rating}</div>
                        <div className={styles.bodyDesc}>
                          <div>{rec["body type"]}</div>
                          <div>{rec.height}</div>
                          <div>{rec.weight}</div>
                        </div>
                      </div>
                    </div>
                    <div>{rec.review_text}</div>
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
