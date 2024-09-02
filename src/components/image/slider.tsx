"use client";
import React from 'react';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type SliderProps = {
  images: { src: string; alt: string }[];
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[EffectCube, Pagination, Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-64">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
