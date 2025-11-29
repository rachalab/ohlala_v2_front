'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from "./NavBar.module.scss"; 

export default function NavBar(){
  const [ menuState, setMenuState ] = useState(false);

  function changeMenuState() {
    !menuState ? setMenuState(true) : setMenuState(false);
  }

  return(
    <>
      <header className={styles.header}>

        <div className={styles.wrapper}>

          <h1 className={styles.brand}>
            <Link href="/">
              <img src="/assets/images/ohlala_brand.svg" alt="Marca Ohlalá" />
            </Link>
          </h1>

          <div className={styles.actions}>
            {!menuState && <button type="button" className={styles.subscription_btn}>suscribite</button>} 
            {!menuState && <img className={styles.search_btn} src="/assets/icons/lupa_icon.svg" alt="menú" />}            
            <button type="button" className={styles.menu_btn} onClick={ () => changeMenuState() }>
              {!menuState ?
                <img src="/assets/icons/menu_icon.svg" alt="menú" className={styles.hamburger} />
              :
                <img src="/assets/icons/close_icon.svg" alt="menú" className={styles.close} />
              }
            </button>
          </div>      

        </div>    

        {menuState &&
          <nav className={styles.menu}> 
            <div className={styles.col_1}>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Actualidad</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Famosos</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Opinión</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Economía</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Sociedad</Link>
            </div>
            <div className={styles.col_2}>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Lifestyle</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Salud</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Historias</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Viajes</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Gastronomía</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Sexo</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Relaciones</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Maternidad</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Recetas</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Revista</Link>
            </div>
            <div className={styles.col_3}>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Horóscopo</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Rituales</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Numerología</Link>
            </div>
            <div className={styles.col_4}>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Espectáculos</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Series</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Películas</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Teatro</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Libros</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Música</Link>
            </div>
            <div className={styles.col_5}>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Moda</Link>
            </div>
            <div className={styles.col_6}>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Belleza</Link>
            </div>
            <div className={styles.col_7}>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Decoración</Link>
              <Link href="#" className={styles.link} onClick={ () => changeMenuState() }>Jardín</Link>
            </div>
          </nav>
        }

      </header>

      {menuState && <div className={styles.overlay} onClick={ () => changeMenuState() } />}
    </>
  )
}