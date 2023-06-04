import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.home_container}>
      <h1 className={styles.home_heading}>PERSONALITY TRAITS TEST</h1>
      <Link href="/test">
        <button className={styles.home_button}>START TEST</button>
        </Link>
    </div>
    </>
  )
}
