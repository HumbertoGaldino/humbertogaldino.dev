import { skills } from '../HardSkills'
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function SwiperSkills(){

    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const updateSlides = () => {
            setSlidesPerView(window.screen.width > 768 ? 6 : 4);
        };

        updateSlides();
        window.addEventListener("resize", updateSlides);

        return () => {
            window.removeEventListener("resize", updateSlides);
        };
    }, []);


    return(
        <>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                loop={true}
                slidesPerView={slidesPerView}
                speed={5000}
            >
                {skills.map(({ id, html }) => (
                    <SwiperSlide key={id} className='w-10'>
                      {html}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}