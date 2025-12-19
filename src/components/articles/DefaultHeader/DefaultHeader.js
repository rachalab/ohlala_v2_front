import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import styles from "./DefaultHeader.module.scss"; 

export default function DefaultHeader(){

  return (
    <div className={styles.wrapper}>

        <Breadcrumb colorMode={0} />

        <h1 className={styles.title}>Del Delorean de Volver al futuro al auto de Lady Di: así es la expo para ver vehículos icónicos</h1>

        <p className={styles.summary}>Te contamos cómo es Iconos sobre ruedas, la expo para ver vehículos históricos, donde estarán desde el Delorean de Volver al futuro al auto de Lady Di o la Ferrari de Diego Maradona.</p>

        <div className={styles.credits}>

            <p className={styles.author}>
                Por <strong>Cristian Phoyú</strong>
                <span className={styles.bullet}>•</span>
                Fotografía <strong>Estudio Ahí va</strong>
            </p>

            <p className={styles.date}>1 de agosto de 2025, 12:51</p>   
                     
        </div>

    </div>
  )
}