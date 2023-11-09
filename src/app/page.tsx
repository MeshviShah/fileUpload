import Image from 'next/image'
import styles from './page.module.css'
import { File } from '../component/file'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <File />
      </div>
    </main>
  )
}
 