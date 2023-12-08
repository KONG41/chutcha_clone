import React from 'react'
import TextBtn from '../components/TextBtn';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import step_1 from "../assets/images/traffic/signal_search_step_01.png"
import step_2 from "../assets/images/traffic/signal_search_step_02.png"
import step_3 from "../assets/images/traffic/signal_search_step_03_on.png"
import SingleSearchStep from '../components/SingleSearchStep';
import SignalGuideSwiper from '../components/SignalGuideSwiper';
import SignalAddSwiper from '../components/SignalAddSwiper';
import { useTranslation } from 'react-i18next';
const TrafficLight = () => {
  SwiperCore.use([Autoplay])
  // const step = [
  //   " <p>궁금한 차량의<br/><span className='blue-text'>차량번호를</span> 입력해주세요. </p>",
  //   " <p>빅데이터가 차량의<br/><span className='blue-text'>실매물 여부를 분석</span> 해요. </p>",
  //   " <p>실매물 여부를<br/><span className='blue-text'>신호등</span> 으로 알려드려요. </p>",
  // ];
  const step = [
    ["궁금한 차량의", "차량번호를", "입력해주세요"],
    ["빅데이터가 차량의", "실매물 여부를 분석", "해요"],
    ["실매물 여부를", "신호등", "으로 알려드려요"]
  ]
  const stepIcon = [
    step_1,
    step_2,
    step_3
  ]
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      // return '<span class="' + className + ' my-pagination">' + '<img src="' + `${stepIcon[index]}` + '" />' + (step[index]) + "</span>";
      return '<span class="' + className + ' my-pagination">' + '<img src="' + `${stepIcon[index]}` + '" />' + '<p>' + t(step[index][0]) + '<br/><span class="blue-text">' + t(step[index][1]) + '</span>' + t(step[index][2]) + '</p>' + "</span>";
    },
  };
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="container traffic-car-cover">
        <div className="container-2 buy-car cover">
          <div className="left">
            <div className="top">
              <span className="main-visual-title"><img src={require('../assets/images/cover/traffic/main_visual_title.png')} alt="main_visual_title" /></span>
              <span className="main-visual-text"><img src={require('../assets/images/cover/traffic/main_visual_text.png')} alt="main_visual_text" /></span>
            </div>
            <div className="bottom">
              <TextBtn text="실매물 검색" />
            </div>
          </div>
          <div className="right">
            <img src={require('../assets/images/cover/main_visual_model.png')} alt="main_visual_models" />
          </div>
        </div>
      </section>

      <section className="realtime_count_area">
        <div className="container-2">

          <Swiper
            cssMode={true}
            direction={"vertical"}
            loop={true}
            autoplay={{

              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"

          >
            <SwiperSlide className="swiper-slide">
              <ul>
                <li>
                  <span className="new-box">New</span>
                </li>
                <li>
                  <span className="message-alt"><strong>{t('331소65')}**</strong>{t('차량 검색결과')}</span>
                </li>
                <li>
                  <span className="cool">{t('실매물')}</span>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <ul>
                <li>
                  <span className="new-box">New</span>
                </li>
                <li>
                  <span className="message-alt"><strong>{t('41러96')}**</strong>{t('차량 검색결과')}</span>
                </li>
                <li>
                  <span className="warm">{t('허위매물')}</span>
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <ul>
                <li>
                  <span className="new-box">New</span>
                </li>
                <li>
                  <span className="message-alt"><strong>{t('03너96')}**</strong>{t('차량 검색결과')}</span>
                </li>
                <li>
                  <span className="cool">{t('실매물')}</span>
                </li>
              </ul>
            </SwiperSlide>
          </Swiper>
          <div className="today-sum">
            <div className="today">
              <ul>
                <li>{t('오늘 허위매물 예방 수')}</li>
                <li><span>122</span><strong>{t('건')}</strong></li>
              </ul>
            </div>
            <div className="sum">
              <ul>
                <li>{t('누적 허위매물 예방 수')}</li>
                <li><span>2,265,121</span><strong>{t("건")}</strong></li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className="sell-what signal_search_how">
        <div className="container-2">
          <h1><img src={require('../assets/images/traffic/signal_search_how_title.png')} /></h1>
          <p>{t('차량번호만 입력하면 첫차 빅데이터가')}</p>
          <p>{t('해당 차량의')} <span className="blue-text">{t('실매물 여부를 분석')}</span> {t('하여 3초면 결과를 알려드립니다')}!</p>
          <ul>
            <li>{t('차량번호 입력하고')}!</li>
            <li>{t('빅데이터가 분석하고')}!</li>
            <li>{t('실매물 여부 확인하고')}!</li>
          </ul>
        </div>
      </section>

      <section className="signal_search_intro">
        <div className="container-2">
          <h1><img src={require('../assets/images/traffic/signal_search_intro_title.png')} alt="신호등 검색은 무엇인가요?" /></h1>
          <p>
            {t('첫차 빅데이터 기술을 기반으로 차량번호만 검색하면')} <br />
            {t('중고차의 실매물, 허위매물 여부를 분석해서 알려주는 서비스입니다')}.
          </p>
          <div className="app_img">
            <img src={require('../assets/images/traffic/signal_search_app_img.png')} />
          </div>
        </div>
      </section>

      <section className="signal_search_step">
        <div className="container-2">
          <h1><img src={require('../assets/images/traffic/signal_search_step_title.png')} alt="신호등 검색, 이렇게 이용하세요!" /></h1>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            autoplayPause
          >
            <SwiperSlide><img src={require('../assets/images/traffic/signal_search_step_01_img.png')} /></SwiperSlide>
            <SwiperSlide><img src={require('../assets/images/traffic/signal_search_step_02_img.png')} /></SwiperSlide>
            <SwiperSlide><img src={require('../assets/images/traffic/signal_search_step_03_img.png')} /></SwiperSlide>
          </Swiper>
        </div>
      </section>
      <SingleSearchStep />


      <section className="signal_search_guide">
        <div className="container-2">
          <h1><img src={require('../assets/images/traffic/signal_search_guide_title.png')} /></h1>
          <ul className="signal_color_guide">
            <li>
              <dl>
                <dt><img src={require('../assets/images/traffic/signal_search_guide_green_title.png')} alt="초록 신호등(실매물)" /></dt>
                <dd>{t('현재 정상적인 신고 절차를 거친')}<br />{t('중고차로 판매 확인되는 경우를 말합니다')}.</dd>
                <dd class="img">
                  <img src={require('../assets/images/traffic/signal_search_guide_green_img_m.png')} alt="초록 신호등 이미지" />
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt><img src={require('../assets/images/traffic/signal_search_guide_green_title.png')} alt="초록 신호등(실매물)" /></dt>
                <dd>{t('현재 정상적인 신고 절차를 거친')}<br />{t('중고차로 판매 확인되는 경우를 말합니다')}.</dd>
                <dd class="img">
                  <img src={require('../assets/images/traffic/signal_search_guide_yellow_img_m.png')} alt="초록 신호등 이미지" />
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt><img src={require('../assets/images/traffic/signal_search_guide_green_title.png')} alt="초록 신호등(실매물)" /></dt>
                <dd>{t('현재 정상적인 신고 절차를 거친')}<br />{t('중고차로 판매 확인되는 경우를 말합니다')}.</dd>
                <dd class="img">
                  <img src={require('../assets/images/traffic/signal_search_guide_red_img_m.png')} alt="초록 신호등 이미지" />
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </section>
      <SignalGuideSwiper />
      <section className="signal_search_added">
        <div className="container-2">
          <h1><img src={require('../assets/images/traffic/signal_search_added_title.png')} /></h1>
          <ul className="signal_color_guide">
            <li>
              <dl>
                <dt><img src={require('../assets/images/traffic/signal_search_added_complete_title.png')} alt="초록 신호등(실매물)" /></dt>
                <dd>{t('현재 정상적인 신고 절차를 거친')}<br />{t('중고차로 판매 확인되는 경우를 말합니다')}.</dd>
                <dd class="img">
                  <img src={require('../assets/images/traffic/signal_search_added_complete_img_m.png')} alt="초록 신호등 이미지" />
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt><img src={require('../assets/images/traffic/signal_search_added_exist_title.png')} alt="초록 신호등(실매물)" /></dt>
                <dd>{t('현재 정상적인 신고 절차를 거친')}<br />{t('중고차로 판매 확인되는 경우를 말합니다')}.</dd>
                <dd class="img">
                  <img src={require('../assets/images/traffic/signal_search_added_exist_img_m.png')} alt="초록 신호등 이미지" />
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt><img src={require('../assets/images/traffic/signal_search_added_range_title.png')} alt="초록 신호등(실매물)" /></dt>
                <dd>{t('현재 정상적인 신고 절차를 거친')}<br />{t('중고차로 판매 확인되는 경우를 말합니다')}.</dd>
                <dd class="img">
                  <img src={require('../assets/images/traffic/signal_search_added_range_img_m.png')} alt="초록 신호등 이미지" />
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </section>
      <SignalAddSwiper />
      <section className="signal_search_qna">
        <div className="container-2">
          <h1><img src={require('../assets/images/traffic/signal_search_qna_title.png')} /></h1>
          <ul className="sell_qna_list">
            <li>
              <dl>
                <dt><img src="https://img.chutcha.kr/files/website/sell/intro/sell_qna_01_title.png?v=2" alt="첫차옥션은 무엇이 다른가요?" /></dt>
                <dd>{t('첫차의 빅데이터 기술로 경쟁, 경매 기반의 최고가 비교 견적이 될 수 있도록 도와드리고 있습니다')}.</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt><img src="https://img.chutcha.kr/files/website/sell/intro/sell_qna_01_title.png?v=2" alt="첫차옥션은 무엇이 다른가요?" /></dt>
                <dd>{t('첫차의 빅데이터 기술로 경쟁, 경매 기반의 최고가 비교 견적이 될 수 있도록 도와드리고 있습니다')}.</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt><img src="https://img.chutcha.kr/files/website/sell/intro/sell_qna_01_title.png?v=2" alt="첫차옥션은 무엇이 다른가요?" /></dt>
                <dd>{t('첫차의 빅데이터 기술로 경쟁, 경매 기반의 최고가 비교 견적이 될 수 있도록 도와드리고 있습니다')}.</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt><img src="https://img.chutcha.kr/files/website/sell/intro/sell_qna_01_title.png?v=2" alt="첫차옥션은 무엇이 다른가요?" /></dt>
                <dd>{t('첫차의 빅데이터 기술로 경쟁, 경매 기반의 최고가 비교 견적이 될 수 있도록 도와드리고 있습니다')}.</dd>
              </dl>
            </li>
          </ul>
        </div>
      </section>

      <section className="app_download_area">
        <div className="container-2">
          <div className="link_area">
            <p className="link_title">{t('이제 안전한 중고차 거래는')}<br />{t('첫차 어플로 해결하세요')}!</p>
            <p className="link_desc">{t('550만이 이용하는 첫차로 중고차 구매, 내차팔기 하세요')}!</p>
            <a href="https://apps.apple.com/kr/app/id982096152" className="app_store" target="_blank"><img src={require('../assets/images/sellcar/app_download_apple.png')} alt="App Store" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.mrpic.chutcha&amp;hl=ko" className="google_play" target="_blank"><img src={require('../assets/images/sellcar/app_download_google.png')} alt="Google Play" /></a>
          </div>
          <img src={require('../assets/images/sellcar/app_download_area_img.png')} alt="첫차" className="app_download_area_img" />
        </div>
      </section>


    </>

  )
}

export default TrafficLight