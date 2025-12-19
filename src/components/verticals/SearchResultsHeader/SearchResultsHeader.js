import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import styles from "./SearchResultsHeader.module.scss"; 

export default function SearchResultsHeader({ title, number }){

  return (
    <div className={styles.wrapper}>
        <Breadcrumb colorMode={0} />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.number}>{number} artículos</p>
    </div>
  )
}