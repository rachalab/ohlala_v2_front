"use client";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import styles from "./TagSwiper.module.scss";

export default function TagSwiper({ data }) {
    // Assuming data contains a tags array or we can map the keys of data if they represent tags
    const tags = data?.tags || (data ? Object.values(data).filter(item => item.title || item.target_id) : []);

    if (tags.length === 0) return null;

    return (
        <div className={styles.wrapper}>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={false}
                freeMode={true}
                grabCursor={true}
                className={`tag-swiper`}
            >
                {tags.map((tag, i) => (
                    <SwiperSlide key={i}>
                        <Link className={styles.tag_filter} href={tag.url || "#"}>
                            <div className={styles.image}>
                                <img src={tag.image.src || "/assets/images/img_tag_filter_demo_1.jpg"} alt={tag.title} />
                            </div>
                            {tag.title}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}     