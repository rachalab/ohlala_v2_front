import styles from "./MagazineCard.module.scss"; 

export default function MagazineCard(){
    
    return (             
        <article className={styles.card}>  

            <div className={styles.text_cont}>
                <h4 className={styles.title}>Disfrutá Ohlalá<br className={styles.hide_in_desk}/> en papel</h4>
                <button className={styles.btn}>Me interesa</button>                 
            </div>   

            <div className={styles.img_cont}>
                <img src="/assets/images/portada_revista_1.jpg" className={styles.image} alt="Imagen" />
                <img src="/assets/images/portada_revista_2.jpg" className={styles.image} alt="Imagen" />
                <img src="/assets/images/portada_revista_3.jpg" className={styles.image} alt="Imagen" />
            </div> 
                        
        </article>               
    )
}