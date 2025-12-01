'use client'
import Link from 'next/link';
import styles from "./Footer.module.scss"; 

export default function Footer(){

  function scrollToTop() {  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return(
    <footer className={styles.wrapper}>

      <div className={styles.top_cont}>

        <div className={styles.col_one}>

          <img src="/assets/images/ohlala_brand.svg" alt="Marca Ohlalá" className={styles.brand} />

          <div className={styles.social_media}>
            <a href="#" rel="noopener noreferrer" target="_blank" className={styles.facebook}>
              <img src="/assets/icons/facebook_icon.svg" alt="Facebook" />
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank" className={styles.instagram}>
              <img src="/assets/icons/instagram_icon.svg" alt="Instagram" />
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank" className={styles.youtube}>
              <img src="/assets/icons/youtube_icon.svg" alt="YouTube" />
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank" className={styles.pinterest}>
              <img src="/assets/icons/pinterest_icon.svg" alt="Pinterest" />
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank" className={styles.twitter}>
              <img src="/assets/icons/twitter_icon.svg" alt="Twitter" />
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank" className={styles.spotify}>
              <img src="/assets/icons/spotify_icon.svg" alt="Spotify" />
            </a>
          </div>

          <div className={styles.rss_newsletter}>
            <a href="#" rel="noopener noreferrer" target="_blank" className={styles.rss_btn}>
              <img src="/assets/icons/rss_icon.svg" alt="RSS" /><span>rss</span>
            </a>
            <button type="button" className={styles.newsletter_btn}><img src="/assets/icons/mail_icon.svg" alt="Newsletter" /><span>Newsletter</span>
            </button>  
          </div>

        </div>

        <div className={styles.col_two}>
          <h5>DESCUBRÍ</h5>
          <Link href="#" className={styles.poster}>Actualidad</Link>
          <Link href="#" className={styles.poster}>Lifestyle</Link>
          <Link href="#" className={styles.poster}>Espectáculos</Link>
          <Link href="#" className={styles.poster}>Horóscopo</Link>
          <Link href="#" className={styles.poster}>Moda</Link>
          <Link href="#" className={styles.poster}>Belleza</Link>
          <Link href="#" className={styles.poster}>Decoración</Link>
        </div>

        <div className={styles.col_three}>
          <h5>NOSOTROS</h5>
          <Link href="#" className={styles.poster}>Manifiesto OHLALÁ!</Link>
          <Link href="#" className={styles.poster}>Mapa de sitio</Link>
          <Link href="#" className={styles.poster}>Contanos tu Historia</Link>
        </div>

        <div className={styles.col_four}>
          <button type="button" className={styles.go_to_btn} onClick={ () => scrollToTop() } />  
        </div>

      </div>

      <div className={styles.bottom_cont}>

        <div className={styles.col_one}>
          <a href="#" rel="noopener noreferrer" target="_blank">Términos y Condiciones</a>
          <hr />
          <a href="#" rel="noopener noreferrer" target="_blank">¿Cómo anunciar?</a>
          <hr />
          <a href="#" rel="noopener noreferrer" target="_blank">Preguntas frecuentes</a>
        </div>

        <div className={styles.col_two}>
          <a href="#" rel="noopener noreferrer" target="_blank" className={styles.data_fiscal}>
            <img src="/assets/images/data_fiscal.jpg" alt="Data fiscal" />
          </a> 
          <div className={styles.legal}>       
            <p>Copyright 2025 SA LA NACIÓN</p>
            <hr />
            <p>Todos los derechos reservados.</p>    
          </div>        
        </div>

      </div>
      
    </footer>
  )
}