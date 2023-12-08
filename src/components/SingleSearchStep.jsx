import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const SingleSearchStep = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "STEP.0" + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <section className="m-signal_search_step">
        <div className="container-2">
          <h1><img src={require('../assets/images/traffic/signal_search_step_title_m.png')} alt="신호등 검색, 이렇게 이용하세요!" /></h1>
          <Swiper
            slidesPerView={1.3}
            spaceBetween={30}
            pagination={pagination}
            modules={[Pagination]}

            className="m-single-search-step-swiper"
          >
            <SwiperSlide><img src={require('../assets/images/traffic/signal_search_step_01_img.png')} /></SwiperSlide>
            <SwiperSlide><img src={require('../assets/images/traffic/signal_search_step_02_img.png')} /></SwiperSlide>
            <SwiperSlide><img src={require('../assets/images/traffic/signal_search_step_03_img.png')} /></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default SingleSearchStep