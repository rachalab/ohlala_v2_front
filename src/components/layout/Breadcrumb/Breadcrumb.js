import Link from 'next/link';
import styles from "./Breadcrumb.module.scss";

export default function Breadcrumb({ colorMode, category }) {
  const categoryName = category?.title || "Espectáculos";
  //const categoryUrl = category?.tid ? `/category/${category.tid}` : "/";
  const categoryUrl = category?.url ? category?.url : "/";

  return (
    <div className={`
      ${styles.wrapper}
      ${colorMode === 0 ? styles.black : styles.white}      
      `}>
      <Link href="/" className={styles.back_btn}>holalá</Link>
      <span className={styles.bullet}>•</span>
      <Link href={categoryUrl}>{categoryName}</Link>
    </div>
  )
}