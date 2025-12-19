"use client";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

export default function Modal({ type }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    setTimeout(() => {    
      setModalStatus(true);  
    }, 2000);
  }, []);

  function closeModal() {
    setIsClosing(true); 
    setModalStatus(false);  
  }

  const modalContent = (
    <div className={`${styles.wrapper} ${isClosing ? styles.closing : ""} ${styles[type]}`}>

        {type === 'newsletter' &&
            <div className={styles.container_newsletter}>

                <button onClick={closeModal} className={styles.close_btn} />                     

                <div className={styles.img_cont}>
                    <img src="/assets/images/newsletter_modal_img.jpg" className={styles.image} alt="Imagen" />
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
        }        

        <div className={styles.overlay_close} />

    </div>
  );

  if (isBrowser && modalStatus) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
}