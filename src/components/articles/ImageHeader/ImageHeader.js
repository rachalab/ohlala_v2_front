import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import styles from "./ImageHeader.module.scss"; 

export default function ImageHeader(){

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>

            <Breadcrumb colorMode={0} />

            <div className={styles.content}>
                <div className={styles.col_left}>
                    <h1 className={styles.title}>Lorem Ipsum is simply dummy texto of the printing and standard typesetting industry page editors now</h1>
                    <p className={styles.summary}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p>
                    <div className={styles.credits}>
                        <p className={styles.author}>
                            Por <strong>Cristian Phoyú</strong>
                            <span className={styles.bullet}>•</span>
                            Fotografía <strong>Estudio Ahí va</strong>
                        </p>
                        <p className={styles.date}>22 de agosto de 2025, 15:45</p>        
                    </div>
                </div>

                <div className={styles.col_right}>
                    <img src="/assets/images/img_entrevista_demo.jpg" alt="Imagen" className={styles.image} />
                </div>
            </div>    

        </div>
    </div>
  )
}