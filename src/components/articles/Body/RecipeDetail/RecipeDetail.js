import styles from "./RecipeDetail.module.scss"; 

export default function RecipeDetail(){

    return (
        <div className={styles.wrapper}>

            <div className={styles.col_left}>
                <h4 className={styles.title}>Ingredientes</h4>
                <ul className={styles.bullets_list}>
                    <li>2 zanahorias</li>
                    <li>Media calabaza</li>
                    <li>2 boniatos</li>
                    <li>1 taza de crema de leche</li>
                    <li>4 cucharadas de queso rallado</li>
                    <li>2 cucharadas de leche</li>
                    <li>Queso extra para terminar</li>
                    <li>Sal, pimienta y nuez moscada</li>
                </ul>
               
            </div>

            <div className={styles.col_right}>
                <h4 className={styles.title}>Procedimiento</h4>
                <ul className={styles.numbers_list}>
                    <li>Cortar las verduras bien finitas. Separar.</li>
                    <li>Mezclar la crema con la leche y condimentar.</li>
                    <li>Ir a una budinera aceitada apenas y colocar una capa de zanahoria, la  mezcla de crema, otra capa de calabaza, la mezcla, zanahorias, más  mezcla y por último boniato.</li>
                    <li>Repetir la operación hasta terminar verduras y mezcla.</li>
                    <li>Completar con queso rallado y llevar a un horno precalentado a temperatura moderada a media hasta que se gratine bien.</li>
                </ul>                
            </div>

        </div>
    )
}