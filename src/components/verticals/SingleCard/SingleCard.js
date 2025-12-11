import Card from "../Card/Card";
import styles from "./SingleCard.module.scss"; 

export default function SingleCard(){

  return (
    <div className={styles.wrapper}>
      <Card
        type='poster'
        imgUrl='/assets/images/img_card_demo.jpg'
        tag='Horóscopo'
        title='La firme decisión de Cris Morena sobre el futuro de Margarita en HBO Max'
        author='Verónica Barrionuevo'
      />
    </div>
  )
}