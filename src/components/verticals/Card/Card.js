import Link from 'next/link';
import styles from "./Card.module.scss"; 

export default function Card({ type, imgUrl, tag, title, description, author, textSize, directionDesk, directionMobile, imageMasonry, authorImg }){

    //type: ‘poster’
    //image: ‘URL/...’
    //tag:  ‘SOCIEDAD’
    //title: ‘Las películas que Dakota Johnson ama...’
    //author: ‘Emanuel Juárez’

    //type: ‘default’
    //textSize: ‘M’
    //cardDirectionDesk: ‘row’
    //cardDirectionMobile: ‘column’
    //image: ‘URL/...’
    //imageMasonry: ‘false’
    //tag:  ‘SOCIEDAD’
    //title: ‘Las películas que Dakota Johnson ama...’
    //author: ‘Emanuel Juárez’

    //type: ‘opinion’
    //image: ‘URL/...’
    //title: ‘Actitud boleto capicúa: cómo habitar...’
    //description: ‘En tiempos de incertidumbre y cambio, el movimiento más poderoso es...’
    //author: ‘Georgina Sticco’
    //authorImg: ‘URL/...’

    
    return (
        <> 
            {type === 'poster' &&
                <article>
                    <Link href="/article-historia-demo" className={styles.poster}>

                        <div className={styles.fixed_hight}>
                            <img src={imgUrl} className={styles.image} alt="Imagen" />
                        </div>

                        <div className={styles.text_cont}>
                            <p className={styles.tag}>{tag}</p>
                            <h3 className={styles.title}>{title}</h3>
                            <p className={styles.author}>por <strong>{author}</strong></p>
                        </div>

                    </Link>
                </article>
            }   

            {type === 'default' &&                
                <article>
                    <Link
                    href="/article-historia-demo"
                    className={`
                    ${styles.default}
                    ${styles[`direction_mobile_${directionMobile}`]}
                    ${styles[`direction_desk_${directionDesk}`]}                    
                    ${styles[`text_size_${textSize}`]}
                    `}>
                        <div className={!imageMasonry ? `${styles.fixed_hight}` : `${styles.variable_height}`}>
                            <img src={imgUrl} className={styles.image} alt="Imagen" />
                        </div>

                        <div className={styles.text_cont}>
                            <div>
                                <p className={styles.tag}>{tag}</p>
                                <h3 className={styles.title}>{title}</h3>
                            </div>                        
                            <p className={styles.author}>por <strong>{author}</strong></p>
                        </div>
                    </Link>
                </article>                
            } 

            {type === 'opinion' &&
                <article>
                    <Link href="/article-historia-demo" className={`${styles.opinion} ${styles.direction_desk_column} ${styles.text_size_m}`}>

                        <div className={styles.author_poster}>
                            <div className={styles.avatar}>
                                <img src={authorImg} alt="Imagen" />
                            </div>
                            <img src={imgUrl} className={styles.image} alt="Imagen" />
                        </div>

                        <div className={styles.text_cont}>
                            <div>
                                <p className={styles.author_top}>{author}</p>                            
                                <h3 className={styles.title}>{title}</h3>
                            </div>
                            <p className={styles.description}>{description}</p>                    
                        </div>

                    </Link>
                </article>
            }         
        </>
    )
}