import VerticalHeader from "@/components/verticals/VerticalHeader/VerticalHeader";
import styles from "./page.module.scss"; 

export const metadata = {
  title: 'Ohlalá | Portada',
  description: 'Sitio V2',
}

export default function Page() {
  return (
    <>
      <VerticalHeader title="Contanos tu historia" />

      <div className={styles.image_hero}>
        <img src="/assets/images/tu_historia_demo.jpg" className={styles.image} alt="Imagen" />
      </div>

      <div className={styles.content}>
        <div className={styles.wrapper}>
          <p><strong>¿Querés que tu historia se convierta en una nota de OHLALÁ?</strong> Es posible y nos encantaría que nos la cuentes. Escribinos brevemente al mail contándonos que hace que tu historia de amor, tu búsqueda espiritual, tu emprendimiento exitoso, o lo que sea que te haya pasado merece amplificación para que todo el mundo se entere. </p>
          <p>Por favor ayudanos a afinar este proceso siguiendo esta breve guía y sé paciente ya que seguramente no seas la única que escribe. Para no generar falsas expectativas sabé que muchas veces pueden pasar meses entre que nos envíes tu historia y que finalmente te contactemos para que se convierta en nota.</p>
          <p><strong>Historias que nos encantan:</strong></p>
          <ul>
            <li>Experiencias en primera persona.</li>
            <li>Temáticas que van desde historias de amor hasta experiencias de salud mental, procesos de búsqueda de embarazos, exploraciones de identidad, citas, historias de relaciones de parejas o de vínculos familiares, terapias alternativas, los primeros días de los expatriados, emprendimientos exitosos o fracasos que finalmente fueron éxitos, historias de amigas, vidas resilientes.</li>
            <li>Tienen que ser historias verdaderas y contadas por la persona que las vivió.</li>
            <li>Como máximo, tienen que tener 5000 caracteres. Aunque, si preferís que nosotras la escribamos, podés redactarla en un par de líneas que expliquen lo que hace que tu historia sea valiosa.</li>
          </ul>
          <a href="#" target="_blank" className={styles.mail_btn}>Escribir al mail</a>
        </div>
      </div>

    </>
  );
}