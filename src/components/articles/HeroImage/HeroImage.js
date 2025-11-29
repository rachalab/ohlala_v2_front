import styles from "./HeroImage.module.scss"; 

export default function HeroImage(){

  return (
    <div className={styles.wrapper}>
        <img src="/assets/images/img_historia_demo.jpg" alt="Imagen" className={styles.image} />
        <p className={styles.caption}>Del Delorean de Volver al futuro al auto de Lady Di: así es la expo para ver vehículos icónicos.</p>
    </div>
  )
}