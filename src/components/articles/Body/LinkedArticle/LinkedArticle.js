import Link from 'next/link';
import styles from "./LinkedArticle.module.scss";

export default function LinkedArticle({ article }) {
  if (!article) return null;

  return (
    <article className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src="/assets/images/linked_article_img_demo.jpg" alt={article.title || "Imagen"} />
        </div>
        <div className={styles.text}>
          <Link href={article.url || "#"}>{article.title}</Link>
        </div>
      </div>
    </article>
  )
}