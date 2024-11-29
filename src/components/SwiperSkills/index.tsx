import { skills } from '../HardSkills'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function SwiperSkills(){
    return(
        <>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                loop={true}
                slidesPerView={6}
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