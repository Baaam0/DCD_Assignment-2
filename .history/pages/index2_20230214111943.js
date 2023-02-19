import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/cloth_data'
import records from '../data/runway_data'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';
import VideoLabelSharpIcon from '@mui/icons-material/VideoLabelSharp';
import ImgBox from '@/component/imgBox'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const imageSrc = [
    "/image/image1.jpg",
    "/image/image2.jpg",
    "/image/image3.jpg",
    "/image/image4.jpg",
    "/image/image5.jpg"
  ];

  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet"/>
      </Head>
      <main className={styles.main}> 
        <div className={styles.heading}>
          <div>
            <img src="/logo.png" width={80} height={80}/>
            <h2>PeriWinkie</h2>
            <h1><Link href="/index"> check review<Image src="/cursor.png" width={15} height={20}/></Link></h1>
          </div>
          <h1>REVIEW</h1>
          
        </div>
        <div className={styles.reviewCont}>
          <div className={styles.imgFront}>
            <ImgBox
              src={imageSrc[index]}
              xClick={()=>{
                setIndex((index+1)%imageSrc.length);
              }}
            />
            <div className={styles.imgBehind}>
              <ImgBox
                src={imageSrc[index+1]}
              />
            </div>
          </div>

        
        </div>
      </main>
    </>
  )
}
