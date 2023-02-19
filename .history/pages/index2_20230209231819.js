import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/cloth_data'
import records from '../data/runway_data'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';
import VideoLabelSharpIcon from '@mui/icons-material/VideoLabelSharp';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(record);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        
         <img src="/logo.png" width={80} height={80}/>
 <h1>REVIEW</h1>
 <div className={styles.box1}>
  <div className={styles.line1}>
    <div className={styles.box2}>
    <CloseSharpIcon/>
    </div>
    <div className={styles.box2}>
      
    </div>
    <div className={styles.box2}></div>
  </div>

    <div className={styles.box3}>

    </div>
    <div className={styles.line2}></div>
 </div>
      </main>
    </>
  )
}
