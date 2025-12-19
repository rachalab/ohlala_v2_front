import styles from "./Search.module.scss"; 

export default function Search(){

  return (
    <div className={styles.wrapper}>        
        <input type="text" placeholder='Palabra, nombre, temática...' className={styles.search_bar}/>
        <button type="button" className={styles.search_btn} >Buscar</button>
    </div>
  )
}