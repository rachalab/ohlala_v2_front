import Card from "../Card/Card";
import styles from "./MasonryCards.module.scss"; 

export default function MasonryCards({ data }){
    const articles = data?.articles || [];
    const stickyArticle = articles[0];
    const masonryArticles = articles.slice(1);

    if (!stickyArticle) return null;

    return (
        <div className={styles.wrapper}>

            <div className={styles.col_sticky}>
                <Card
                    type='default'
                    textSize='m'
                    directionDesk='column'
                    directionMobile='column'
                    imgUrl={stickyArticle.image?.src}
                    tag={stickyArticle.category}
                    title={stickyArticle.title}
                    author={stickyArticle.author}
                    url={stickyArticle.url}
                    imageMasonry={true}                 
                />
            </div>

            <div className={styles.col_masonry}>     
                {masonryArticles.map((article, i)=> 
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
                        imageMasonry={true}                
                    />
                )}                  
            </div>       

        </div>
    )
}