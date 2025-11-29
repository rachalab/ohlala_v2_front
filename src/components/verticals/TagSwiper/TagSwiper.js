import Link from 'next/link';
import styles from "./TagSwiper.module.scss"; 

export default function TagSwiper(){

    return (
        <div className={styles.wrapper}>

            <Link className={styles.tag_filter} href="#">
                <div className={styles.image}>
                    <img src="/assets/images/img_tag_filter_demo_1.jpg" alt="Imagen" />
                </div>            
                Horóscopo de hoy
            </Link> 

            <Link className={styles.tag_filter} href="#">
                <div className={styles.image}>
                    <img src="/assets/images/img_tag_filter_demo_2.jpg" alt="Imagen" />
                </div>            
                Dakota Johnson
            </Link>     

            <Link className={styles.tag_filter} href="#">
                <div className={styles.image}>
                    <img src="/assets/images/img_tag_filter_demo_3.jpg" alt="Imagen" />
                </div>            
                Navidad 2025
            </Link> 

            <Link className={styles.tag_filter} href="#">
                <div className={styles.image}>
                    <img src="/assets/images/img_tag_filter_demo_5.jpg" alt="Imagen" />
                </div>            
                Moda 2026
            </Link>
            
            <Link className={styles.tag_filter} href="#">
                <div className={styles.image}>
                    <img src="/assets/images/img_tag_filter_demo_4.jpg" alt="Imagen" />
                </div>            
                Ideas deco
            </Link>              

        </div>                 
    )
}