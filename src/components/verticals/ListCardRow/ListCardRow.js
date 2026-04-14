import Card from "../Card/Card";
import styles from "./ListCardRow.module.scss"; 

export default function ListCardRow({ data }){
    const articles = data?.articles || [];

    return (
        <div className={styles.wrapper}>
            {articles.map((article, i)=> 
                <Card
                    key={i}
                    type='default'
                    textSize='m'
                    directionDesk='row'
                    directionMobile='column'
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