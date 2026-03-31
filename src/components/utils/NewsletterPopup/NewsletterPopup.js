"use client";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./NewsletterPopup.module.scss";

const STORAGE_KEY = "newsletter_popup_dismissed";
const DISMISS_DURATION_MS = 60 * 60 * 1000; // 1 hora

function isDismissed() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const dismissedAt = Number(raw);
    if (isNaN(dismissedAt)) return false;
    return Date.now() - dismissedAt < DISMISS_DURATION_MS;
  } catch {
    return false;
  }
}

function saveDismissal() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // silently ignore if localStorage is unavailable
  }
}

export default function NewsletterPopup() {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    setIsBrowser(true);

    // No mostrar si fue cerrado hace menos de 1 hora
    if (isDismissed()) return;

    const timer = setTimeout(() => {
      setModalStatus(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function closeModal() {
    setIsClosing(true);
    saveDismissal();
    setTimeout(() => {
      setModalStatus(false);
    }, 2000);
  }

  const modalContent = (
    <div className={`${styles.wrapper} ${isClosing ? styles.closing : ""}`}>

        <div className={styles.container_newsletter}>

            <button onClick={ () => closeModal() } className={styles.close_btn} />                     

            <div className={styles.img_cont}>
                <img src="/assets/images/newsletter_img.jpg" className={styles.image} alt="Imagen" />
            </div>  

            <div className={styles.text_cont}>
                <h4 className={styles.title}>Enterate primero</h4>
                <p className={styles.description}>Conocé antes que nadie las tendencias, predicciones y novedades de la mano de Ohlalá!</p>
                <form className={styles.form}>
                    <label className={styles.label}>Correo electrónico</label>
                    <input type="email" id="mail" name="user_mail" placeholder="Correo..." className={styles.input}/>
                    <button type="submit" className={styles.submit_btn}>Registrarme</button>                 
                </form>
            </div> 
            
        </div>        

        <div className={styles.overlay_close} onClick={ () => closeModal() } />

    </div>
  );

  if (isBrowser && modalStatus) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
}
