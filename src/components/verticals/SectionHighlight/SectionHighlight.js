import Link from 'next/link';
import styles from "./SectionHighlight.module.scss"; 

export default function SectionHighlight(){

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.img_cont}>                    
                    <img src="/assets/images/img_holaland_demo.jpg" alt="Imagen" />
                </div>
                
                <div className={styles.text_cont}>
                    <p className={styles.tag}>HOLALAND!</p>
                    <h3 className={styles.title}>
                        <Link href="#">Cami Ibarbalz: “La mentalidad de rico implica empezar a ahorrar hoy, no importa cuánto ganes”</Link>
                    </h3>                                            
                    <p className={styles.author}>por <strong>Agustina Vissani</strong> y <strong>Soledad Simond</strong></p>
                </div>
            
            </div>            
        </div>       
    )
}