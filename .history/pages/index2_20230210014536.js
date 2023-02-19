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
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const imageSrc = [
    "/image/image1.jpg",
    "/image/image2.jpg",
    "/image/image3.jpg",
    "/image/image4.jpg",
    "/image/image5.jpg"
  ];

  const renderImage = imageSrc.map((i) => { 
    console.log(imageSrc);
    return (
      <ImgBox src={i}/>
    )
  });

  const [index, setIndex] = useState(0);
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
        <h5>Preview of</h5>
        <h1>REVIEW</h1>
        <div className={styles.reviewCont}>
          <div>
            <ImgBox
              src={imageSrc[index]}
              onClick={()=>{
                setIndex((index+1)%imageSrc.length);
              }}

            />
          </div>

          <div className={styles.imgBehind}>
            <ImgBox
              src={imageSrc[index+1]}
            />
          </div>
        </div>
      </main>
    </>
  )
}