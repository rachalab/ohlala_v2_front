import styles from "./NewsletterCard.module.scss"; 

export default function NewsletterCard(){
    
    return (             
        <article className={styles.wrapper}>
            <div className={styles.img_cont}>
                <img src="/assets/images/newsletter_img.jpg" className={styles.image} alt="Imagen" />
            </div>

            <div className={styles.text_cont}>
                <h4 className={styles.title}>Enterate primero</h4>
                <p className={styles.description}>Conocé antes que nadie las tendencias, predicciones y novedades de la mano de Ohlalá!</p>
                <form className={styles.form}>
                    <label className={styles.label}>Correo electrónico</label>
                    <input type="email" id="mail" name="user_mail" placeholder="Correo..." className={styles.input}/>
                    <button type="submit" className={styles.submit_btn}>Registrarme</button>                 
                </form>
            </div>                 
        </article>               
    )
}