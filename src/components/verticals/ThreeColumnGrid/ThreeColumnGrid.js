import Card from "../Card/Card";
import styles from "./ThreeColumnGrid.module.scss"; 

export default function ThreeColumnGrid(){

    const dataDemo = [
        {
            imgUrl: '/assets/images/img_card_demo_2.jpg',
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
        },
        {
            imgUrl: '/assets/images/img_card_demo.jpg',
            tag: 'Horóscopo',
            title: 'La firme decisión de Cris Morena sobre el futuro de Margarita en HBO Max',
            author: 'Emanuel Juárez',
        },
        {
            imgUrl: '/assets/images/img_card_demo.jpg',
            tag: 'Horóscopo',
            title: 'La firme decisión de Cris Morena sobre el futuro de Margarita en HBO Max',
            author: 'Emanuel Juárez',
        }
    ]

    return (
        <div className={styles.wrapper}>
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
                    imageMasonry={false}                
                />
            )}   
        </div>       
    )
}