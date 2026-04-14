'use client';
import { Fragment } from 'react';
import Link from 'next/link';
import styles from "./Footer.module.scss";

export default function FooterClient({ footerItems = [], networksItems = [], newsItems = [] }) {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <footer className={styles.container}>

      <div className={styles.top_cont}>

        <div className={styles.col_one}>

          <img src="/assets/images/ohlala_brand.svg" alt="Ohlalá" className={styles.brand} />

          {Array.isArray(networksItems) && networksItems?.length > 0 &&
            <div className={styles.social_media}>
              {networksItems?.map((subItem, subIndex) => (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  key={subIndex}
                  href={subItem?.url}
                  className={styles[`${subItem?.style}`]}
                >
                  <img src={subItem?.icon} alt={subItem?.title} />
                </a>
              ))}
            </div>
          }

          {Array.isArray(newsItems) && newsItems?.length > 0 &&
            <div className={styles.rss_newsletter}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={newsItems[0]?.url}
                className={styles[`${newsItems[0]?.style}`]}
              >
                <img src={newsItems[0]?.icon} alt={newsItems[0]?.title} />
                <span>{newsItems[0]?.title}</span>
              </a>
              <button type="button" className={styles[`${newsItems[1]?.style}`]}>
                <img src={newsItems[1]?.icon} alt={newsItems[1]?.title} />
                <span>{newsItems[1]?.title}</span>
              </button>
            </div>
          }
        </div>

        {Array.isArray(footerItems) && footerItems?.length > 0 &&
          <>
            <div className={styles.col_two}>
              {footerItems[0] &&
                <>
                  {footerItems[0]?.title && <h5>{footerItems[0].title}</h5>}
                  {footerItems[0].children?.length > 0 &&
                    footerItems[0]?.children.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.url}
                        className={styles.poster}
                      >
                        {subItem.title}
                      </Link>
                    ))
                  }
                </>
              }

            </div>

            <div className={styles.col_three}>
              {footerItems[1] &&
                <>
                  {footerItems[1]?.title && <h5>{footerItems[1].title}</h5>}
                  {footerItems[1].children?.length > 0 &&
                    footerItems[1]?.children.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.url}
                        className={styles.poster}
                      >
                        {subItem.title}
                      </Link>
                    ))
                  }
                </>
              }
            </div>
          </>
        }

        <div className={styles.col_four}>
          <button type="button" className={styles.go_to_btn} onClick={() => scrollToTop()} />
        </div>

      </div>

      <div className={styles.bottom_cont}>
        <div className={styles.wrapper}>
          {Array.isArray(footerItems) &&
            <>
              <div className={styles.col_one}>
                {footerItems[2] &&
                  <>
                    {footerItems[2].children?.length > 0 &&
                      footerItems[2]?.children.map((subItem, subIndex) => (
                        <Fragment key={subIndex}>
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={subItem.url}
                          >
                            {subItem.title}
                          </a>
                          {subIndex < footerItems[2].children.length - 1 && <hr />}
                        </Fragment>
                      ))
                    }
                  </>
                }
              </div>
            </>
          }
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
      </div>

    </footer>
  )
}
