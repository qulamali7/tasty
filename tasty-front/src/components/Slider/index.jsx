import React from "react";
import "./index.scss";
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./index.scss";
const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide><div className="slider_img1"><h1>Tasty</h1></div></SwiperSlide>
        <SwiperSlide><div className="slider_img2"><h1>Tasty</h1></div></SwiperSlide>
        <SwiperSlide><div className="slider_img3"><h1>Tasty</h1></div></SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default Slider;
