import Link from 'next/link';
import styles from "./Breadcrumb.module.scss"; 

export default function Breadcrumb(){

  return (
    <div className={styles.wrapper}>
        <Link href="/" className={styles.back_btn}>holalá</Link>
        <span className={styles.bullet}>•</span>
        <Link href="/">Espectáculos</Link>
    </div>
  )
}