import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {

    const [setSwiperRef] = useState();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={200}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                initialSlide={1}
            >
                <SwiperSlide>
                    <img className="w-full h-auto" src="https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-auto" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-auto" src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-auto" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-auto" src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide 5" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
