import Link from 'next/link';
import styles from "./SectionHighlight.module.scss";

export default function SectionHighlight({ data }) {
    if (!data) return null;
    const { tag, color, title } = data;
    const article = data.articles[0];
    const author = article?.author ? `por <strong>${article.author}</strong>` : "";

    return (
        <div className={styles.container} style={{ backgroundColor: color }}>
            <div className={styles.wrapper}>

                <div className={styles.img_cont}>
                    <img src={article?.image_alt?.src || "/assets/images/img_holaland_demo.jpg"} alt={title} />
                </div>

                <div className={styles.text_cont}>
                    <p className={styles.tag} >{tag}</p>
                    <h3 className={styles.title}>
                        <Link href={article?.url || "#"}>{article.title}</Link>
                    </h3>
                    {author && <p className={styles.author} dangerouslySetInnerHTML={{ __html: author }} />}
                </div>

            </div>
        </div>
    )
}