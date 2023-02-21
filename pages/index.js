import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import ImgBox from '@/component/imgBox'
import { useState, useEffect } from 'react'
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

  useEffect(() => {
    document.title = "PeriWinkie - Review Homepage";
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main} id="main"> 
        <div className={styles.heading}>
          <div>
            <img src="/logo.png" width={80} height={80}/>
            <h2>PeriWinkie</h2>
            <Link href="/review"><h1> check review <Image src="/cursor.png" width={15} height={20}/></h1></Link>
          </div>
          <h1>Homepage</h1>
          
        </div>
        <div className={styles.reviewCont} >
          <div className={styles.imgFront}>
            <ImgBox
              src={imageSrc[index]}
              xClick={()=>{
                setIndex((index+1)%imageSrc.length);
              }}
            />
            <div className={styles.imgBehind} id="imgBehind">
              <ImgBox
                src={imageSrc[index+1]}
              />
            </div>
          </div>
        </div>
        <div className={styles.nextButton} id="button">
          <Link href="/review" id="buttonText">
            Check Out Reviews
          </Link>
        </div>
      </main>
    </>
  )
}
