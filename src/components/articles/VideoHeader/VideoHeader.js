import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import styles from "./VideoHeader.module.scss"; 

export default function VideoHeader(){

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>

            <Breadcrumb colorMode={1} />

            <div className={styles.content}>
                <div className={styles.col_left}>
                    <h1 className={styles.title}>Carl Honoré y la filosofía slow: "Tenemos que recuperar el arte de simplemente ser"</h1>
                    <p className={styles.summary}>Carl Honoré, periodista y abanderado del movimiento slow a nivel mundial, vino a OHLALAND para hablar de la importancia de andar más lento por la vida. Dejamos claves.</p>
                    <div className={styles.credits}>
                        <p className={styles.author}>
                            Por <strong>Agustina Vissani</strong> y <strong>Euge Castagnino</strong>
                        </p>
                        <p className={styles.date}>22 de agosto de 2025, 15:45</p>        
                    </div>
                </div>

                <div className={styles.col_right}>
                    <iframe
                        src="https://www.youtube.com/embed/R3741-DAG1Y?si=FfUek07m7oHoGFEh"
                        title="YouTube video player"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>    

        </div>
    </div>
  )
}