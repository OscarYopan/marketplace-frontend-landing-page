import banner1 from '../../assets/images/banner_04.webp'
import banner2 from '../../assets/images/banner_05.webp'
import banner3 from '../../assets/images/banner_06.webp'
import banner4 from '../../assets/images/banner_07.webp'
import banner5 from '../../assets/images/banner_08.webp'
import banner6 from '../../assets/images/banner_09.webp'
import banner7 from '../../assets/images/banner_10.webp'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} alt="Banner 01" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="Banner 02" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="Banner 03" /></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="Banner 04" /></SwiperSlide>
        <SwiperSlide><img src={banner5} alt="Banner 05" /></SwiperSlide>
        <SwiperSlide><img src={banner6} alt="Banner 06" /></SwiperSlide>
        <SwiperSlide><img src={banner7} alt="Banner 07" /></SwiperSlide>
      </Swiper>
    </>
  );
}