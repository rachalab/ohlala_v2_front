import ShareButtons from "./ShareButtons/ShareButtons";
import LinkedArticle from "./LinkedArticle/LinkedArticle";
import AuthorBio from "./AuthorBio/AuthorBio";
import ArticleTags from "./ArticleTags/ArticleTags";
import styles from "./Body.module.scss"; 

export default function Body(){

  return (
    <div className={styles.wrapper}>

        <div className={styles.share_wrapper}>
            <ShareButtons />
        </div>

        <div className={styles.blocks}>

            <div className={styles.col_left}>
                <p className={styles.paragraph}>Llega a Buenos Aires una muestra única para amantes del cine, la velocidad y la historia de los vehículos: Iconos sobre ruedas, <a href="#" target="_blank">exposición de autos legendarios que marcaron una época</a>. ¿Cuándo vas a poder ver desde el Delorean de Volver al futuro al auto de Lady Di o la Ferrari de Diego Maradona? Te lo contamos, a continuación.</p>   

                <div className={styles.horizontal_ad}>
                    <div className={styles.ad_wrapper} />  
                </div>

                <h3 className={styles.subtitle}>Así es Iconos sobre ruedas</h3>

                <p className={styles.paragraph}>Pocos objetos condensan tanto de una época como un auto. Y eso queda claro en <strong>Iconos sobre ruedas, a la que podríamos considerar mucho más que una simple exposición:</strong> es una experiencia inmersiva y emocional que reúne 15 vehículos únicos que pertenecieron a celebridades y leyendas de la moda, el cine, la música o la cultura.</p>
                <p className={styles.paragraph}>Cada vehículo estará acompañado por pertenencias del personaje famoso que fue su dueño, convirtiéndose así en una pieza de colección tanto mecánica como simbólica. <strong>Uno de los protagonistas más esperados es el DeLorean</strong>, <a href="#" target="_blank">el famoso auto de Volver al Futuro, con su diseño retro futurista y sus alas de gaviota que siguen fascinando a generaciones enteras</a>.</p> 

                <div className={styles.image_wrapper}>
                    <img src="/assets/images/img_article_body_demo.jpg" alt="Imagen" className={styles.image} />
                    <p className={styles.caption}>Del Delorean de Volver al futuro al auto de Lady Di: así es la expo para ver vehículos icónicos.</p>       
                </div>

                <p className={styles.paragraph}>Pero no es el único: también se podrá ver el lujoso automóvil de Marilyn Monroe, un Ford Escort de la Princesa Diana, la deslumbrante Ferrari Testarossa de Diego Maradona, famosa por la historia de su obtención, entre otros.</p>

                <LinkedArticle />

                <p className={styles.paragraph}>Pero no es el único: también se podrá ver el lujoso automóvil de Marilyn Monroe, un Ford Escort de la Princesa Diana, la deslumbrante Ferrari Testarossa de Diego Maradona, famosa por la historia de su obtención, entre otros.</p>

                <div className={styles.image_wrapper}>
                    <img src="/assets/images/img_article_body_demo_2.jpg" alt="Imagen" className={styles.image} />
                    <p className={styles.caption}>Dónde ver en Buenos Aires el Delorean de Volver al futuro. - Créditos: Prensa.</p>       
                </div>

                <h3 className={styles.subtitle}>Así es Iconos sobre ruedas</h3>

                <p className={styles.paragraph}>Las entradas para Iconos sobre ruedas ya están disponibles <a href="#" target="_blank">a través de Ticketek</a> y tienen un valor de $25.000, más $3.750 de costos de servicio.</p>

                <p className={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    
                <AuthorBio />
                <ArticleTags />

            </div>

            <div className={styles.col_right}>
                <div className={styles.ad_wrapper} />                 
            </div>     

        </div>

    </div>
  )
}