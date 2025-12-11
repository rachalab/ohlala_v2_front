import styles from "./AuthorBio.module.scss"; 

export default function AuthorBio(){

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img src="/assets/images/img_author_demo_2.jpg" alt="Imagen"/>
            </div>
            <div className={styles.text}>
                <p><strong>Cristian Phoyú</strong> Es comunicador audiovisual egresado de la Universidad de La Plata (UNLP). Trabaja desde hace 15 años en medios, siendo productor de TV, redactor y editor web. Es apasionado del cine y de las series.</p>
            </div>                            
        </div>
    </div>
  )
}