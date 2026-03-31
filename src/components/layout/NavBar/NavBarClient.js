'use client';
import { useState } from 'react';
import Link from 'next/link';
import Search from '../Search/Search';
import styles from "./NavBar.module.scss"; 

export default function NavBarClient({ menuItems = [], subscription = false }) {
  const [menuState, setMenuState] = useState(false);
  const [searchState, setSearchState] = useState(false);

  function changeMenuState() {
    setMenuState(prev => !prev);
  }

  function changeSearchState() {
    setSearchState(prev => !prev);
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
            {!menuState && !searchState && subscription && 
              <button 
                type="button" 
                className={styles.subscription_btn}>
                  {subscription?.title}
              </button>
            } 

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

        {menuState && Array.isArray(menuItems) &&
          <nav className={styles.menu}> 
            {menuItems?.map((item, index) => (
              <div key={index} className={styles[`col_${index + 1}`]}>
                
                {/* Item principal */}
                <Link 
                  href={item.url} 
                  className={styles.link} 
                  onClick={() => changeMenuState()}
                >
                  {item.title}
                </Link>
                
                {item.children?.length > 0 && 
                  item.children.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex} 
                      href={subItem.url} 
                      className={`${styles.link} ${styles.subLink}`}
                      onClick={() => changeMenuState()}
                    >
                      {subItem.title}
                    </Link>
                  ))
                }
              </div>
            ))}
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
