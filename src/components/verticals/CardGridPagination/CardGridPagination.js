"use client";
import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import Card from "@/components/verticals/Card/Card";
import styles from "./CardGridPagination.module.scss";

const BATCH_SIZE = 12;  // Lo que trae la API y el prop inicial
const CHUNK_SIZE = 6;   // Lo que se muestra por vez

// Datos de prueba (6 notas)
const dataDemo = [
    {
        image: {'src': '/assets/images/img_card_demo_2.jpg'},
        category: 'moda',
        title: 'Gótica y súper glamorosa: el look Dark Beauty de Jenna Ortega presentando Merlina 2',
        author: 'Cristian Phoyú',
    },
    {
        image: {'src': '/assets/images/img_card_demo_3.jpg'},
        category: 'decoración',
        title: 'Separadores y paneles de madera: ideas simples para',
        author: 'Redacción OHLALÁ!',
    },
    {
        image: {'src': '/assets/images/img_card_demo.jpg'},
        category: 'Horóscopo',
        title: 'Horóscopó mensual: el DESAFÍO que va a enfrentar cada signo en agosto',
        author: 'Redacción OHLALÁ!',
    },
    {
        image: {'src': '/assets/images/img_card_demo_2.jpg'},
        category: 'salud',
        title: 'Soltar un vínculo que nos lastima: por qué cuesta tanto y cómo empezar a hacerlo',
        author: 'Emanuel Juárez',
    },
    {
        image: {'src': '/assets/images/img_card_demo.jpg'},
        category: 'Horóscopo',
        title: 'La firme decisión de Cris Morena sobre el futuro de Margarita en HBO Max',
        author: 'Emanuel Juárez',
    },
    {
        image: {'src': '/assets/images/img_card_demo.jpg'},
        category: 'Horóscopo',
        title: 'La firme decisión de Cris Morena sobre el futuro de Margarita en HBO Max',
        author: 'Emanuel Juárez',
    }
];


export default function CardGridPagination({ cards, category }){

    const [visibleCards, setVisibleCards] = useState(() => cards.slice(0, CHUNK_SIZE));
    const [queue, setQueue] = useState(() => cards.slice(CHUNK_SIZE));
    const [hasMore, setHasMore] = useState(() => cards.length >= BATCH_SIZE);
    const [offset, setOffset] = useState(BATCH_SIZE);
    const [isLoading, setIsLoading] = useState(false);
    const [shouldFetch, setShouldFetch] = useState(false); // 👈 dispara el fetch

    const showButton = queue.length > 0 || hasMore;

    // Se ejecuta solo cuando shouldFetch pasa a true
    useEffect(() => {
        if (!shouldFetch) return;

        const fetchMore = async () => {
            setIsLoading(true);
            try {
                const apiPath = `/range/${category?.type}/${category?.tid}/${offset}`;
                const response = await api.get(apiPath);
                
                const newCards = response?.articles || [];

                setQueue(newCards);
                setHasMore(newCards.length >= BATCH_SIZE);
                setOffset(prev => prev + BATCH_SIZE);
            } catch (err) {
                console.error('Error al cargar más notas:', err);
            } finally {
                setIsLoading(false);
                setShouldFetch(false); // 👈 resetea para poder volver a disparar
            }
        };

        fetchMore();
    }, [shouldFetch]); // 👈 solo depende de este flag

    const handleLoadMore = () => {
        if (isLoading) return;

        const toShow = queue.slice(0, CHUNK_SIZE);
        const remaining = queue.slice(CHUNK_SIZE);

        setVisibleCards(prev => [...prev, ...toShow]);
        setQueue(remaining);

        if (remaining.length === 0 && hasMore) {
            setShouldFetch(true); // 👈 dispara el useEffect
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                {visibleCards.map((card, i) =>
                    <Card
                        key={i}
                        type='default'
                        textSize='s'
                        directionDesk='column'
                        directionMobile='row'
                        imgUrl={card?.image?.src}
                        tag={card?.category}
                        title={card?.title}
                        author={card?.author}
                        imageMasonry={false}
                    />
                )}
            </div>
            
            {showButton && (
                <button
                    type="button"
                    className={styles.show_more_btn}
                    onClick={handleLoadMore}
                    disabled={isLoading}
                >
                    {isLoading ? 'Cargando...' : 'Cargar más'}
                </button>
            )}
        </div>
    );
}