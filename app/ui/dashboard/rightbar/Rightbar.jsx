import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

function Rightbar() {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.desc}>
            Irure nulla magna aliquip tempor in mollit elit commodo velit
            adipisicing ullamco Lorem proident.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.desc}>
            Irure nulla magna aliquip tempor in mollit elit commodo velit
            adipisicing ullamco Lorem proident.
          </p>
          <button className={styles.button}>
            <MdReadMore/>
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
