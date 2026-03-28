import Card from "../Card/Card";
import styles from "./ThreeColumnGrid.module.scss"; 

export default function ThreeColumnGrid({ data }){
    const articles = data?.articles || [];

    return (
        <div className={styles.wrapper}>
            {articles.map((article, i)=> 
                <Card
                    key={i}
                    type='default'
                    textSize='s'
                    directionDesk='column'
                    directionMobile='row'
                    imgUrl={article.image?.src}
                    tag={article.category}
                    title={article.title}
                    author={article.author}
                    url={article.url}
                    imageMasonry={false}                
                />
            )}   
        </div>       
    )
}