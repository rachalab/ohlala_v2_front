import Link from 'next/link';
import styles from "./LinkedArticle.module.scss"; 

export default function LinkedArticle(){

  return (
    <article className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src="/assets/images/linked_article_img_demo.jpg" alt="Imagen"/>
            </div>
            <div className={styles.text}>
                <Link href="#">Quiénes son los diseñadores argentinos en la Semana del Diseño en Milán</Link>
            </div>                            
        </div>
    </article>
  )
}