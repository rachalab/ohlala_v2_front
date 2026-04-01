import CardGridPagination from "../CardGridPagination/CardGridPagination";
import styles from "./SearchResults.module.scss"; 

export default function SearchResults({ cards, tag }){

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>

            <section className={styles.col_left}>     
                <CardGridPagination cards={cards} tag={tag} />
            </section>

            <div className={styles.col_right}>
                <div className={styles.ad_wrapper} />                 
            </div>       

        </div>
    </div>
  )
}