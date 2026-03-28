import styles from "./HeroImage.module.scss";

export default function HeroImage({ image, title }) {

  return (
    <div className={styles.wrapper}>
      <img src={image?.url} alt={image?.alt} className={styles.image} />
      {title && <p className={styles.caption}>{title}</p>}
    </div>
  )
}