import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import styles from "./VerticalHeader.module.scss"; 

export default function VerticalHeader(){

  return (
    <div className={styles.wrapper}>
        <Breadcrumb />
        <h1 className={styles.title}>Espectáculos</h1>
    </div>
  )
}