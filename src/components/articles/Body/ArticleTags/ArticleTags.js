import styles from "./ArticleTags.module.scss"; 

export default function ArticleTags(){

  return (
    <div className={styles.wrapper}>
        <p className={styles.title}>En esta nota:</p>
        <button type="button" className={styles.tag_btn}>Lady Di</button>
        <button type="button" className={styles.tag_btn}>Vehículos</button>
        <button type="button" className={styles.tag_btn}>Diego Maradona</button>
        <button type="button" className={styles.tag_btn}>Volver al futuro</button>
    </div>
  )
}