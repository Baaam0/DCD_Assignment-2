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
        <form>
          
        </form>
        <button>update</button>
        <div className={styles.cont}>
        
          {
            records.map((rec, index) => {
              return(
                <div className={styles.cont1}>
                  {rec.rating > 8 ? 
                  <div key={index} className={styles.cont2}>
                    <div className={styles.cont3}>
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
                 </div>
              )
            }
          )} 
        </div>        
      </main>
    </>
  )
}
