import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import { useTranslation } from 'react-i18next';
const SignalGuideSwiper = () => {
  const { t } = useTranslation()
  return (
    <section className="m-signal-guide" >
      <div className="container-2">
        <h1><img src={require('../assets/images/traffic/signal_search_guide_title_m.png')} /></h1>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="my-signal-guide"
        >
          <SwiperSlide>
            <div className="signal-box">
              <div className="img">
                <img src={require('../assets/images/traffic/signal_search_guide_green_img_m.png')} alt="초록 신호등 이미지" />
              </div>
              <h1><img src={require('../assets/images/traffic/signal_search_guide_green_title.png')} alt="초록 신호등(실매물)" /></h1>
              <p>{t('현재 정상적인 신고 절차를 거친')}<br />{t('중고차로 판매 확인되는 경우를 말합니다')}.</p>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="signal-box">
              <div className="img">
                <img src={require('../assets/images/traffic/signal_search_guide_yellow_img_m.png')} alt="초록 신호등 이미지" />
              </div>
              <h1><img src={require('../assets/images/traffic/signal_search_guide_green_title.png')} alt="초록 신호등(실매물)" /></h1>
              <p>{t('현재 정상적인 신고 절차를 거친')}<br />{t('중고차로 판매 확인되는 경우를 말합니다')}.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="signal-box">
              <div className="img">
                <img src={require('../assets/images/traffic/signal_search_guide_red_img_m.png')} alt="초록 신호등 이미지" />
              </div>
              <h1><img src={require('../assets/images/traffic/signal_search_guide_green_title.png')} alt="초록 신호등(실매물)" /></h1>
              <p>{t('현재 정상적인 신고 절차를 거친')}<br />{t('중고차로 판매 확인되는 경우를 말합니다')}.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default SignalGuideSwiper