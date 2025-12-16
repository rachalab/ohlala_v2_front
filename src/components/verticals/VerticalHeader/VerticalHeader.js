import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import styles from "./VerticalHeader.module.scss"; 

export default function VerticalHeader({ title }){

  return (
    <div className={styles.wrapper}>
        <Breadcrumb colorMode={0} />
        <h1 className={styles.title}>{title}</h1>
    </div>
  )
}