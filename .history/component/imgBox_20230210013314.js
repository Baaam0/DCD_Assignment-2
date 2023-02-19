import React from 'react'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';
import VideoLabelSharpIcon from '@mui/icons-material/VideoLabelSharp';
import styles from '@/styles/Home.module.css'

function ImgBox({
  src,
  onClick
}) {
  return (
    <div className={styles.box1}>
    <div className={styles.line1}>
      <div className={styles.box2}>
        <MinimizeSharpIcon/>
      </div>
      <div className={styles.box2}>
        <VideoLabelSharpIcon fontSize="small"/>
      </div>
      <div className={styles.box2}>
        <CloseSharpIcon 
        onClick={onClick}/>
      </div>
    </div>
  
      <div className={styles.box3}>
        <img src={src} className={styles.img}/>
      </div>
      <div className={styles.line2}></div>
   </div>
  )
}

export default ImgBox