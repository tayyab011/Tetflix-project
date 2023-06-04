import React from 'react';
import a from '../images/post5.jpg';
import b from '../images/post6.jpg';
import d from '../images/pos1.jpg';
import e from '../images/post3.jpg';
import f from '../images/pos2.jpg';
import g from '../images/post7.jpg';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import  "./styles.css";

const Banner = () => {
    return (
      <div div className='bg-black'>
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
          <SwiperSlide><img src={a}/></SwiperSlide>
          <SwiperSlide><img src={b}/></SwiperSlide>
          <SwiperSlide><img src={d}/></SwiperSlide>
          <SwiperSlide><img src={e}/></SwiperSlide>
        
        </Swiper>
      </div>
    );
};

export default Banner;