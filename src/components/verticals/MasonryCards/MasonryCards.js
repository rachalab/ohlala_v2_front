import Card from "../Card/Card";
import styles from "./MasonryCards.module.scss"; 

export default function MasonryCards(){

    const dataDemo = [
        {
            imgUrl: '/assets/images/img_card_demo_5.jpg',
            tag: 'moda',
            title: 'Gótica y súper glamorosa: el look Dark Beauty de Jenna Ortega presentando Merlina 2',
            author: 'Cristian Phoyú',
        },
        {
            imgUrl: '/assets/images/img_card_demo_3.jpg',
            tag: 'decoración',
            title: 'Separadores y paneles de madera: ideas simples para',
            author: 'Redacción OHLALÁ!',
        },
        {
            imgUrl: '/assets/images/img_card_demo.jpg',
            tag: 'Horóscopo',
            title: 'Horóscopó mensual: el DESAFÍO que va a enfrentar cada signo en agosto',
            author: 'Redacción OHLALÁ!',
        },
        {
            imgUrl: '/assets/images/img_card_demo_2.jpg',
            tag: 'salud',
            title: 'Soltar un vínculo que nos lastima: por qué cuesta tanto y cómo empezar a hacerlo',
            author: 'Emanuel Juárez',
        }
    ]

  return (
    <div className={styles.wrapper}>

        <div className={styles.col_sticky}>
            <Card
                type='default'
                textSize='m'
                directionDesk='column'
                directionMobile='column'
                imgUrl='/assets/images/img_card_demo_4.jpg'
                tag='actualidad'
                title='Botas pirata: el calzado que fue tendencia en los 2000 y vuelve con fuerza este invierno'
                author='Cristian Phoyú'
                imageMasonry={true}                 
            />
        </div>

        <div className={styles.col_masonry}>     
            {dataDemo?.map((card, i)=> 
                <Card
                    key={i}
                    type='default'
                    textSize='s'
                    directionDesk='column'
                    directionMobile='row'
                    imgUrl={card.imgUrl}
                    tag={card.tag}
                    title={card.title}
                    author={card.author}   
                    imageMasonry={true}                
                />
            )}                  
        </div>       

    </div>
  )
}