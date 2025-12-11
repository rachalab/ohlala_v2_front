import SingleCard from "../SingleCard/SingleCard";
import ThreeColumnGrid from "../ThreeColumnGrid/ThreeColumnGrid";
import TwoColumnGrid from "../TwoColumnGrid/TwoColumnGrid";
import MasonryCards from "../MasonryCards/MasonryCards";
import ListCardRow from "../ListCardRow/ListCardRow";
import HorizontalAdBlock from "../HorizontalAdBlock/HorizontalAdBlock";
import styles from "./SectionsContainer.module.scss"; 

export default function SectionsContainer(){

  return (
    <div className={styles.wrapper}>

        <div className={styles.col_left}>      

            <section>
              <h4 className={styles.title}>
                  <img src="/assets/icons/fire_icon.svg" className={styles.icon} alt="Icono" />
                  últimas noticias
              </h4>
              <SingleCard />
              <ThreeColumnGrid />
              <HorizontalAdBlock />
            </section> 
              
            <section>
              <h4 className={styles.title}>
                  <img src="/assets/icons/fire_icon.svg" className={styles.icon} alt="Icono" />
                  Lifestyle
              </h4>
              <MasonryCards />
              <TwoColumnGrid /> 
              <ListCardRow /> 
              <HorizontalAdBlock />
            </section>       

        </div>

        <div className={styles.col_right}>
          <div className={styles.ad_wrapper} />                 
        </div>       

    </div>
  )
}