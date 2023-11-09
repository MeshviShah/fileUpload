import Image from 'next/image'
import styles from './page.module.css'

import  Login  from '../component/login'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          {/* <File /> */}
          <Login />
      </div>
    </main>
  )
}
 