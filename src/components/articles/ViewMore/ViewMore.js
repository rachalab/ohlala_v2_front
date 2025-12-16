import MostReadCards from "./MostReadCards/MostReadCards";
import CardGridPagination from "./CardGridPagination/CardGridPagination";
import NewsletterCard from "../NewsletterCard/NewsletterCard";
import MagazineCard from "../MagazineCard/MagazineCard";
import styles from "./ViewMore.module.scss"; 

export default function ViewMore(){

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>

            <div className={styles.col_left}>      

                <section className={styles.section}>
                    <h4 className={styles.title}>
                        TOP 3 más leídas
                    </h4>
                    <MostReadCards />
                </section>

                <NewsletterCard />
                <MagazineCard />
                
                <section className={styles.section}>
                    <h4 className={styles.title}>
                        SEGUIR LEYENDO
                    </h4>
                    <CardGridPagination />
                </section>       

            </div>

            {/* <div className={styles.col_right}>
                <div className={styles.ad_wrapper} />                 
            </div> */}       

        </div>
    </div>
  )
}