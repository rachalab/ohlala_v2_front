"use client";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import styles from "./TagSwiper.module.scss"; 

export default function TagSwiper(){

    const dataDemo = [
        {'image' : '/assets/images/img_tag_filter_demo_1.jpg', 'title' : 'Horóscopo de hoy'},
        {'image' : '/assets/images/img_tag_filter_demo_2.jpg', 'title' : 'Dakota Johnson'},
        {'image' : '/assets/images/img_tag_filter_demo_3.jpg', 'title' : 'Navidad 2025'},
        {'image' : '/assets/images/img_tag_filter_demo_5.jpg', 'title' : 'Moda 2026'},
        {'image' : '/assets/images/img_tag_filter_demo_4.jpg', 'title' : 'Ideas deco'}
    ]

    return (
        <div className={styles.wrapper}>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={false}
                freeMode={false}
                grabCursor={false}
                className={`tag-swiper`}
            >
                {dataDemo.map((tag, i) => (
                    <SwiperSlide key={i}>
                        <Link className={styles.tag_filter} href="#">
                            <div className={styles.image}>
                                <img src={tag.image} alt="Imagen" />
                            </div>            
                            {tag.title}
                        </Link> 
                    </SwiperSlide>
                ))}               
            </Swiper>           
        </div>                 
    )
}     