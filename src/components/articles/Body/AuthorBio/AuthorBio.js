import styles from "./AuthorBio.module.scss";

export default function AuthorBio({ authors }) {

  if (!authors) return null;

  return (
    <div className={styles.container}>
      {authors?.map((author, index) => (
        <div key={index} className={styles.wrapper}>
          <div className={styles.avatar}>
            <img src={author.image?.url || "/assets/images/img_author_demo_2.jpg"} alt={author.title} />
          </div>
          <div className={styles.text}>
            <p><strong>{author.title}</strong> {author.excerpt || ""}</p>
          </div>
        </div>
      ))}
    </div>
  )
}