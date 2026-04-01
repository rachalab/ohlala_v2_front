import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import styles from "./SearchResultsHeader.module.scss"; 

export default function SearchResultsHeader({ title, number, category }){

  return (
    <div className={styles.wrapper}>
        <Breadcrumb colorMode={0} category={category} />
        <h1 className={styles.title}>{title}</h1>
        {number && <p className={styles.number}>{number} artículos</p>}
    </div>
  )
}