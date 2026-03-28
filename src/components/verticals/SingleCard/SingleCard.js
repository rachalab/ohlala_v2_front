import Card from "../Card/Card";
import styles from "./SingleCard.module.scss"; 

export default function SingleCard({ data }){
  const article = data?.articles?.[0];

  if (!article) return null;

  return (
    <div className={styles.wrapper}>
      <Card
        type='poster'
        imgUrl={article.image?.src}
        tag={article.category}
        title={article.title}
        author={article.author}
        url={article.url}
      />
    </div>
  )
}