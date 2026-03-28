import Card from "../Card/Card";
import styles from "./TwoColumnGrid.module.scss"; 

export default function TwoColumnGrid({ data }){
    const articles = data?.articles || [];

    return (
        <div className={styles.wrapper}>
            {articles.map((article, i)=> 
                <Card
                    type={article.type || 'default'}
                    key={i}                    
                    textSize='m'
                    directionDesk='column'
                    directionMobile='column'
                    imgUrl={article.image?.src}
                    tag={article.category}
                    title={article.title}
                    description={article.excerpt}
                    author={article.author}   
                    authorImg={article.authorImg}
                    url={article.url}
                    imageMasonry={false}                
                />
            )}   
        </div>       
    )
}