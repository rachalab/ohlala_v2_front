import VerticalHeader from "@/components/verticals/VerticalHeader/VerticalHeader";
import styles from "./page.module.scss"; 

export const metadata = {
  title: 'Ohlalá | Portada',
  description: 'Sitio V2',
}

export default function Page() {
  return (
    <>
      <VerticalHeader title="Manifiesto Ohlalá!" />

      <div className={styles.content}>
        <div className={styles.col_left}>
          <h4 className={styles.highlighted}>Una plataforma de contenidos pensados por y para una comunidad de mujeres poderosas que buscan estar informadas, acompañadas y mantenerse despiertas.</h4>
        </div>
        <div className={styles.col_right}>
          <p>Fuimos la primera revista femenina nativa digital, sabiendo la importancia de lo que se genera en los foros entre mujeres, en esa red que nos sostiene, en la contundencia de la multiplataforma, donde no sólo te acompañábamos en nuestra edición impresa mes a mes, sino todos los días desde nuestro sitio. Por esto mismo, hoy volvemos a tener nuestra plataforma de contenidos digitales: para poder reunir en un solo lugar todo eso que te interesa, para “curar” el contenido de valor pero, sobre todas las cosas, para estar más cerca, para poder acompañarte.</p>
          <p>Somos un grupo de profesionales que busca día a día construir un mundo más igualitario, más libre y más humano. Somos socias desde el amor, y continuamos con nuestra tarea de abrazar a todas las  mujeres, desde la contención, el poder personal, el encuentro para el diálogo y la unión a pesar de las diferencias. “Somos mucha mujer” es uno de nuestros mantras, porque sabemos que juntas somos más poderosas.</p>
          <p><strong>SOMOS MUCHA MUJER. SOMOS OHLALÁ!</strong></p>
        </div>
      </div>

    </>
  );
}