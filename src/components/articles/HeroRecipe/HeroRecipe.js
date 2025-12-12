import styles from "./HeroRecipe.module.scss"; 

export default function HeroRecipe(){

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>

            <div className={styles.col_left}>
                <div className={styles.key_data}>
                    <p className={styles.title}>porciones</p>
                    <p className={styles.number}>4</p>
                </div>
                <div className={styles.key_data}>
                    <p className={styles.title}>tiempo de preparación</p>
                    <p className={styles.number}>10 min</p>
                </div>
                <div className={styles.key_data}>
                    <p className={styles.title}>tiempo de cocción</p>
                    <p className={styles.number}>15 min</p>
                </div>
                <div className={styles.key_data}>
                    <p className={styles.title}>tiempo total</p>
                    <p className={styles.number}>35 min</p>
                </div>
            </div>

            <div className={styles.col_right}>
                <img src="/assets/images/img_receta_demo.jpg" alt="Imagen" className={styles.image} />
            </div>

        </div>
    </div>
  )
}