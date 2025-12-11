import Link from 'next/link';
import styles from "./MostReadCards.module.scss"; 

export default function MostReadCards(){

    const dataDemo = [
        {
            imgUrl: '/assets/images/img_card_demo_2.jpg',
            title: 'Lo tiene el 50% de los argentinos: ¿qué es el estrés financiero y cómo afecta la salud mental?',
        },
        {
            imgUrl: '/assets/images/img_card_demo_3.jpg',          
            title: 'Lo tiene el 50% de los argentinos: ¿qué es el estrés financiero y cómo afecta la salud mental?',
        },
        {
            imgUrl: '/assets/images/img_card_demo.jpg',
            title: 'Lo tiene el 50% de los argentinos: ¿qué es el estrés financiero y cómo afecta la salud mental?',
        }
    ]

    return (
        <div className={styles.wrapper}>

            {dataDemo?.map((card, i)=> 
                <article key={i}className={styles.card}>
                    <Link href="#">
                        <div className={styles.image_wrapper}>
                            <img src={card.imgUrl} className={styles.image} alt="Imagen" />
                        </div>
                        <div className={styles.text_cont}>   
                            <h3 className={styles.title}>{card.title}</h3>                                     
                        </div>
                    </Link>
                </article>    
            )}

        </div>         
    )
}