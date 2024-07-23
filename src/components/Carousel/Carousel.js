import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carousel.css'

import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

export default function Carousel({ albumData }) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={6}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {albumData.map((data) => (
                <SwiperSlide style={{ color: "white" }}>
                    <Card title={data.title} image={data.image} follows={data.follows} 
                    {...data}
                    />
                </SwiperSlide>
            ))}

            {/* Custom navigation buttons */}
            <div className="swiper-button-prev">
                <img src={leftArrow} alt="Previous" />
            </div>
            <div className="swiper-button-next">
                <img src={rightArrow} alt="Next" />
            </div>

        </Swiper>
    )
}