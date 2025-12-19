'use client';
import { useState } from 'react';
import Link from 'next/link';
import Search from '../Search/Search';
import styles from "./NavBar.module.scss"; 

export default function NavBar(){
  const [ menuState, setMenuState ] = useState(false);
  const [ searchState, setSearchState ] = useState(false);

  function changeMenuState() {
    !menuState ? setMenuState(true) : setMenuState(false);
  }

  function changeSearchState() {
    !searchState ? setSearchState(true) : setSearchState(false);
  }

  return(
    <>
      <header className={styles.header}>

        <div className={`${styles.wrapper} ${!searchState ? styles.shadow : ''}`}>

          <h1 className={styles.brand}>
            <Link href="/">
              <img src="/assets/images/ohlala_brand.svg" alt="Marca Ohlalá" />
            </Link>
          </h1>

          <div className={styles.actions}>
            {!menuState && !searchState && <button type="button" className={styles.subscription_btn}>suscribite</button>} 

            {!menuState &&
              <button type="button" className={styles.search_btn} onClick={ () => changeSearchState() }>                
                {!searchState ?
                  <img className={styles.search} src="/assets/icons/lupa_icon.svg" alt="menú" />
                :
                  <img src="/assets/icons/close_icon.svg" alt="menú" className={styles.close} />
                }
              </button>            
            } 

            {!searchState &&
              <button type="button" className={styles.menu_btn} onClick={ () => changeMenuState() }>
                {!menuState ?
                  <img src="/assets/icons/menu_icon.svg" alt="menú" className={styles.hamburger} />
                :
                  <img src="/assets/icons/close_icon.svg" alt="menú" className={styles.close} />
                }
              </button>
            }
          </div>      

        </div>    

        {menuState &&
          <nav className={styles.menu}> 
            <div className={styles.col_1}>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Actualidad</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Famosos</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Opinión</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Economía</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Sociedad</Link>
            </div>
            <div className={styles.col_2}>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Lifestyle</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Salud</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Historias</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Viajes</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Gastronomía</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Sexo</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Relaciones</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Maternidad</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Recetas</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Revista</Link>
            </div>
            <div className={styles.col_3}>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Horóscopo</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Rituales</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Numerología</Link>
            </div>
            <div className={styles.col_4}>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Espectáculos</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Series</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Películas</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Teatro</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Libros</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Música</Link>
            </div>
            <div className={styles.col_5}>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Moda</Link>
            </div>
            <div className={styles.col_6}>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Belleza</Link>
            </div>
            <div className={styles.col_7}>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Decoración</Link>
              <Link href="/category-demo" className={styles.link} onClick={ () => changeMenuState() }>Jardín</Link>
            </div>
          </nav>
        }

        {searchState &&
          <div className={styles.search_panel}> 
            <Search />
          </div>
        }

      </header>

      {(menuState || searchState) && (
        <div
          className={styles.overlay}
          onClick={ () => menuState ? changeMenuState() : changeSearchState()}
        />
      )}
      
    </>
  )
}