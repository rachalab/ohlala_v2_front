import styles from "./ArticleTags.module.scss";

export default function ArticleTags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>En esta nota:</p>
      {tags.map((tag, index) => (
        <button key={index} type="button" className={styles.tag_btn}>
          {tag.name}
        </button>
      ))}
    </div>
  )
}