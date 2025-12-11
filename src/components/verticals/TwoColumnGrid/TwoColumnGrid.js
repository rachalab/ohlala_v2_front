import Card from "../Card/Card";
import styles from "./TwoColumnGrid.module.scss"; 

export default function TwoColumnGrid(){

    const dataDemo = [
        {
            type: 'default',
            imgUrl: '/assets/images/img_card_demo_2.jpg',
            tag: 'moda',
            title: 'Gótica y súper glamorosa: el look Dark Beauty de Jenna Ortega presentando Merlina 2',
            author: 'Cristian Phoyú',
        },
        {
            type: 'default',
            imgUrl: '/assets/images/img_card_demo_3.jpg',
            tag: 'decoración',
            title: 'Separadores y paneles de madera: ideas simples para',
            author: 'Redacción OHLALÁ!',
        },
/*         {
            type: 'opinion',
            imgUrl: '/assets/images/img_card_demo_6.jpg',
            tag: 'Horóscopo',
            title: '‘New in’: todo lo que una editora de compras tiene bajo su radar esta semana',
            author: 'Miranda Priestly',
            description: 'Llega una nueva semana y con ella nuevas prendas y accesorios se convierten en novedosos hypes. Los estilos de nueva temporada primavera-verano 2025 ya han aterrizado (y se actualizan rápidamente) en nuestras...',
            authorImg: '/assets/images/img_author_demo.jpg'
        },
        {
            type: 'opinion',
            imgUrl: '/assets/images/img_card_demo_2.jpg',
            tag: 'salud',
            title: '“Actitud boleto capicúa”: cómo habitar el presente y encontrar magia en lo cotidiano',
            author: 'Emanuel Juárez',
            description: 'En tiempos de incertidumbre y cambio, el movimiento más poderoso es el que hacemos hacia adentro. La directora de OHLALÁ! Sole Simond reflexiona sobre soltar ejemplos reflexiona sobre soltar ejemplos reflexiona sobre...',
            authorImg: '/assets/images/img_author_demo.jpg'
        } */
    ]

    return (
        <div className={styles.wrapper}>
            {dataDemo?.map((card, i)=> 
                <Card
                    type={card.type}
                    key={i}                    
                    textSize='m'
                    directionDesk='column'
                    directionMobile='column'
                    imgUrl={card.imgUrl}
                    tag={card.tag}
                    title={card.title}
                    description={card.description}
                    author={card.author}   
                    authorImg={card.authorImg}
                    imageMasonry={false}                
                />
            )}   
        </div>       
    )
}