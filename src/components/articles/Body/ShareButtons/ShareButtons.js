import styles from "./ShareButtons.module.scss"; 

export default function ShareButtons(){

  return (
    <>
      <div className={styles.mobile_wrapper}>
        <button type="button" className={styles.btn}>compartir</button>
      </div>

      <div className={styles.desk_wrapper}>
          <button type="button" className={styles.btn}>
              <img src="/assets/icons/twitter_icon.svg" alt="Twitter" className={styles.twitter} />
          </button>
          <button type="button" className={styles.btn}>
              <img src="/assets/icons/whatsapp_icon.svg" alt="WhatsApp" className={styles.whatsapp} />
          </button>
          <button type="button" className={styles.btn}>
              <img src="/assets/icons/facebook_icon.svg" alt="Facebook" className={styles.facebook} />
          </button>
      </div>
    </>
  )
}