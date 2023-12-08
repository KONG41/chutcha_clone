import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';
// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
const AuctionStepper = () => {
  const { t, i18n } = useTranslation();
  const script = [
    {
      title: "사진 3장 등록하기",
      desc: "간편하게 내 차 사진 3장만 등록해보세요! 1분이면 끝"
    },
    {
      title: "무제한 비교견적 받기",
      desc: "전국 딜러들의 경쟁을 통해 전화없이 무제한으로 견적을 받아보세요"
    },
    {
      title: "견적 선택하면 완료",
      desc: "마음에 드는 견적을 선택하면, 원하는 장소로 방문해 매입합니다. 수수료는 0원"
    }
  ]
  const pagination = {
    clickable: false,
    renderBullet: function (index, className) {
      return ' <div class="pagination-box"> <span class="' + className + '">' + (index + 1) + '</span>' + '<div class="desc">' + '<p>' + t(script[index].title) + '</p>' + '<p>' + t(script[index].desc) + '</p>' + '</div>' + '</div>';
    },
  };
  return (
    <>
      <Swiper navigation={true} pagination={pagination} modules={[Pagination, Navigation]} className="stepper-auction">
        <SwiperSlide><img src={require('../assets/images/buycar/auction_slide_01.jpg')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/buycar/auction_slide_02.jpg')} /></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/buycar/auction_slide_03.jpg')} /></SwiperSlide>
      </Swiper>
    </>


  )
}

export default AuctionStepper