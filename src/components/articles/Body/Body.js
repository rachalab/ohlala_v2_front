import ShareButtons from "./ShareButtons/ShareButtons";
import LinkedArticle from "./LinkedArticle/LinkedArticle";
import AuthorBio from "./AuthorBio/AuthorBio";
import ArticleTags from "./ArticleTags/ArticleTags";
import RecipeDetail from "./RecipeDetail/RecipeDetail";
import styles from "./Body.module.scss"; 

export default function Body({ type }){

  return (
    <div className={styles.wrapper}>

        <div className={styles.share_wrapper}>
            <ShareButtons />
        </div>

        <div className={styles.blocks}>

            <div className={styles.col_left}>

                {type === 'historia' && 
                <>
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
                </>
                }
                
                {type === 'receta' &&
                    <RecipeDetail /> 
                }  

                {(type === 'video' || type === 'entrevista') && 
                <>
                    <p className={styles.paragraph}>Carl Honoré es un periodista canadiense y autor del best seller "Elogio de la lentitud", escrito hace 20 años y puntapié del movimiento "slow" a nivel mundial. Carl es evangelizador de la importancia de bajar un cambio y de cómo aplicar esta filosofía en diferentes ámbitos de la vida. Hablamos con él en OHLALAND para que nos cuente cómo surgió esta inquietud en él y cuáles son las claves para andar más lento en el día a día.</p> 
                    <p className={styles.paragraph}><strong>- ¿Cómo arranca Elogio de la lentitud, o cómo investigaste?</strong></p>
                    <p className={styles.paragraph}>Al inicio fue difícil, porque yo fui básicamente el pionero en esto. O sea, existía en aquella época el movimiento de slow food, comida lenta, ¿no? En Italia. Ciudades lentas, también. Otras cositas por ahí, pero no había ningún movimiento. De hecho, <strong>mi libro pasó a ser como el detonante, la Biblia de este movimiento</strong>, así que no sé, sentía algo por osmosis, en el aire, que había algo, que las placas tectónicas se estaban moviendo, que había un anhelo, un apetito creciente... la gente buscaba otro ritmo, no quería pasarlo en  modo Correcaminos constantemente. Pero al principio no sabía por dónde empezar, así que salí como buen periodista a hacer preguntas y encontré una pista, abrí una puerta, seguí y me tardé bastante, ¿no? Ese primer libro fue un proceso largo, de cavar, de investigar, de destapar, etcétera. Pero emocionante al mismo tiempo, porque la chispa había sido una crisis existencial personal, así que escribir este libro.</p>
                    <p className={styles.paragraph}><strong>- ¿Primero lo descubriste en tu vida y entonces decidiste escribir un libro?</strong></p>
                    <p className={styles.paragraph}>Con frecuencia, es necesaria una "llamada de atención" o un "shock al sistema" para darnos cuenta de que hemos olvidado cómo "pisar el freno" y que la prisa nos está haciendo daño. Para muchas personas, esta llamada de atención llega en forma de enfermedad. En MI caso, ocurrió al leer cuentos a mi hijo. Yo solía hacer una lectura "dinámica y rápida", saltándome páginas, lo que resultaba en versiones de cuentos como "Blancanieves" con solo tres enanitos. Al escuchar sobre un libro de "cuentitos para dormir de un minuto", tuve una epifanía y me di cuenta de que estaba "acelerando la vida en lugar de vivirla". Esta crisis existencial personal me llevó a investigar mi propia "adicción a la  prisa" y el fenómeno global de la velocidad.</p>
                    <div className={styles.horizontal_ad}>
                        <div className={styles.ad_wrapper} />  
                    </div>
                    <p className={styles.paragraph}><strong>- ¿A nuestro cerebro le cuesta ir más lento, tenemos que hacer un esfuerzo cognitivo para ir más lento?</strong></p>
                    <p className={styles.paragraph}>En estos días sí, yo creo que en el estado natural el cerebro humano busca momentos de adrenalina, de excitación, de rapidez, pero como no somos algoritmos ni máquinas, también necesitamos momentos de serenidad, de silencio, de calma, de tranquilidad, slow. Buscamos esos momentos naturalmente, es un instinto natural. Lo que pasa es que en el mundo moderno hemos cambiado un poco la estructura, los hábitos del cerebro, así que ahora el cerebro del ciudadano promedio argentino, ponele, está empapado, saturado con esas cosas de velocidad... y cuando surge la posibilidad de desacelerar, de ir más lento, en lugar de abrazarlo con alivio, nos entra un pánico. Es como que, "¡Ay, Dios mío, lento, qué  horror!".</p>
                    <p className={styles.paragraph}><strong>- Es como "¿qué me estoy perdiendo?"</strong></p>
                    <p className={styles.paragraph}>Claro, se me pasa la vida... y no, al final es un despilfarro, ¿no? Porque <strong>correr por la vida es desperdiciarla</strong>. Pero estamos casi todos atrapados en esta vorágine, en este carrusel de velocidad pasando de un acto a otro. Y además con la tecnología, ahora con las redes sociales y ese bombardeo constante de distracción, de estimulación. Hasta los chicos están en lo mismo, ¿no? Y esto yo creo que en el fondo explica el <strong>boom de trastornos mentales</strong>, ¿no? Por un lado, porque estamos desconectados de los demás, de nosotros mismos... pagamos un precio muy alto por esta prisa.</p>
                    <ArticleTags />
                </>
                }                             

            </div>

            <div className={styles.col_right}>
                <div className={`${styles.ad_wrapper} ${type === 'receta' ? styles.square : '' }`} />                 
            </div>     

        </div>

    </div>
  )
}