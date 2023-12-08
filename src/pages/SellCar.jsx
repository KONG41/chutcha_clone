import React from 'react'
import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import SquareBtn from '../components/SquareBtn';
import TextBtn from '../components/TextBtn';
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const SellCar = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="container sell-car-cover">
        <div className="container-2 buy-car cover">
          <div className="left">
            <div className="top">
              <span className="main-visual-title"><img src={require('../assets/images/cover/sellcar/main_visual_title.png')} alt="main_visual_title" /></span>
              <span className="main-visual-text"><img src={require('../assets/images/cover/sellcar/main_visual_text.png')} alt="main_visual_text" /></span>
            </div>
            <div className="bottom">
              <TextBtn text='비교견적 신청하기' />
              <SquareBtn icon={<IoLogoApple />} />
              <SquareBtn icon={<IoLogoGooglePlaystore />} />
            </div>
          </div>
          <div className="right">
            <img src={require('../assets/images/cover/main-visual-graphic-img.png')} alt="main-visual-graphic-img" />
          </div>
        </div>
      </section>

      <section className="sell-what">
        <div className="container-2">
          <h1>{t('첫차 내차팔기 서비스. 첫차옥션')}</h1>
          <p>{t('차량 정보만 입력하면 전화 한통없이')}</p>
          <p>{t('간편하고 빠르게')} <span className="blue-text">{t('내차팔기 비교 견적을')}</span> {t('알려드립니다!')}</p>

          <ul className="full-screen">
            <li><img src={require('../assets/images/sellcar/sell_what_01.png')} /></li>
            <li><img src={require('../assets/images/sellcar/sell_what_02.png')} /></li>
            <li><img src={require('../assets/images/sellcar/sell_what_03.png')} /></li>
          </ul>

          <ul className="display-mobile m-sell-what">
            <li><img src={require('../assets/images/sellcar/sell_what_01_m.png')} /></li>
            <li><img src={require('../assets/images/sellcar/sell_what_02_m.png')} /></li>
            <li><img src={require('../assets/images/sellcar/sell_what_03_m.png')} /></li>
          </ul>
        </div>
      </section>

      <section className="sell_adv">
        <div className="container-2">
          <h1>{t('첫차옥션의 장점은 무엇인가요?')}</h1>
          <p>{t('첫차옥션은 차량 정보만 입력하면')}</p>
          <p>{t('귀찮은 전화 한 통 없이 무제한으로 비교 견적을 제공하는 서비스입니다')}.</p>
          <p>{t('+ 부당감가 0%, 전국 방문매입은 덤!')}</p>
          <ul className="full-screen">
            <li>
              <img src={require('../assets/images/sellcar/sell_adv_img_text_1.png')} />
              <img src={require('../assets/images/sellcar/sell_adv_img_1.png')} />
            </li>
            <li>
              <img src={require('../assets/images/sellcar/sell_adv_img_text_2.png')} />
              <img src={require('../assets/images/sellcar/sell_adv_img_2.png')} />
            </li>
            <li>
              <img src={require('../assets/images/sellcar/sell_adv_img_text_3.png')} />
              <img src={require('../assets/images/sellcar/sell_adv_img_3.png')} />
            </li>
          </ul>

          <ul className="display-mobile">
            <Swiper
              slidesPerView={1.3}
              spaceBetween={0}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="my-signal-global"
            >
              <SwiperSlide>
                <li>
                  <img src={require('../assets/images/sellcar/sell_adv_img_text_1.png')} />
                  <img src={require('../assets/images/sellcar/sell_adv_img_1.png')} />
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={require('../assets/images/sellcar/sell_adv_img_text_2.png')} />
                  <img src={require('../assets/images/sellcar/sell_adv_img_2.png')} />
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={require('../assets/images/sellcar/sell_adv_img_text_3.png')} />
                  <img src={require('../assets/images/sellcar/sell_adv_img_3.png')} />
                </li>
              </SwiperSlide>
            </Swiper>



          </ul>
        </div>
      </section>

      <section className="sell_step">
        <div className="container-2">
          <h1>{t('첫차옥션, 이렇게 이용하세요!')}</h1>
          <ul className="full-screen">
            <li>
              <img src={require('../assets/images/sellcar/step_img_01.png')} />
              <h2>step.01</h2>
              <p>{t('간편하게 차량정보 등록')}</p>
            </li>
            <li>
              <img src={require('../assets/images/sellcar/step_img_02.png')} />
              <h2>step.02</h2>
              <p>{t('내 차에 대한 견적 경쟁')}</p>
            </li>
            <li>
              <img src={require('../assets/images/sellcar/step_img_03.png')} />
              <h2>step.03</h2>
              <p>{t('귀찮은 전화없이 견적 알림')}</p>
            </li>
            <li>
              <img src={require('../assets/images/sellcar/step_img_04.png')} />
              <h2>step.04</h2>
              <p>{t('최고가 선택하면 방문 매입')}</p>
            </li>
            <li>
              <img src={require('../assets/images/sellcar/step_img_05.png')} />
              <h2>step.05</h2>
              <p>{t('수수료는 0원')}</p>
            </li>
          </ul>

          <ul className="display-mobile">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={0}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="my-signal-global"
            >
              <SwiperSlide>
                <li>
                  <img src={require('../assets/images/sellcar/step_img_01_m.png')} />
                  <h2>step.01</h2>
                  <p>{t('간편하게 차량정보 등록')}</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={require('../assets/images/sellcar/step_img_02_m.png')} />
                  <h2>step.02</h2>
                  <p>{t('내 차에 대한 견적 경쟁')}</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={require('../assets/images/sellcar/step_img_03_m.png')} />
                  <h2>step.03</h2>
                  <p>{t('귀찮은 전화없이 견적 알림')}</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={require('../assets/images/sellcar/step_img_04_m.png')} />
                  <h2>step.04</h2>
                  <p>{t('최고가 선택하면 방문 매입')}</p>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <img src={require('../assets/images/sellcar/step_img_05_m.png')} />
                  <h2>step.05</h2>
                  <p>{t('수수료는 0원')}</p>
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
        </div>
      </section>

      <section className="sell_qna">
        <div className="container-2">
          <h1>Q&A</h1>
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

      <section className="sell_media">
        <div className="container-2">
          <h1>{t('언론보도')}</h1>
          <ul className="sell_media_list full-screen">
            <li>
              <a href="https://www.asiatime.co.kr/article/20220511500455" target="_blank">
                <dl>
                  <dd className="img"><img src="https://img.chutcha.kr/files/website/sell/intro/media-lmg-04.png" alt="보도사진" /></dd>
                  <dt>{t('중고차 경매')}</dt>
                  <dd>{t('모바일 중고차 플랫폼 첫차가 자사 내차팔기 서비스 ‘첫차옥션’ 의 누적 취급액이 3조9000억원을 돌파했다고 11일 밝혔다. 첫차옥션의 대대적인 개편 이후 약…')}</dd>
                  <dd className="media_origin">
                    <img src="https://img.chutcha.kr/files/website/sell/intro/media-logo-06.png" alt="아시아타임즈" />
                    <span>2022.05.11</span>
                  </dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="https://news.naver.com/main/read.nhn?mode=LSD&amp;mid=sec&amp;sid1=103&amp;oid=005&amp;aid=0001449745" target="_blank">
                <dl>
                  <dd className="img"><img src="https://img.chutcha.kr/files/website/sell/intro/media-lmg-01_02.png" alt="보도사진" /></dd>
                  <dt>{t('첫차, 중고차 조회서비스 ‘신호등검색’ 누적검색 100만건 돌파')}</dt>
                  <dd>{t('모바일 중고차 플랫폼 ‘첫차’는 22일 자사 실매물 조회 서비스인 ‘신호등검색’ 통계를 조사해보니 70%가 허위매물로 확인됐다고 밝혔다. 실매물은 28%에 그쳤고, 주의매물은…')}</dd>
                  <dd className="media_origin">
                    <img src="https://img.chutcha.kr/files/website/sell/intro/media-logo-04.png" alt="국민일보" />
                    <span>2021.06.22</span>
                  </dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="https://newsis.com/view/?id=NISX20191231_0000876254&amp;cID=13001&amp;pID=13000" target="_blank">
                <dl>
                  <dd className="img"><img src="https://img.chutcha.kr/files/website/sell/intro/media-lmg-02_02.png" alt="보도사진" /></dd>
                  <dt>{t('첫차 최철훈 대표, “소비자 중심의 중고차 정보 플랫폼 만들 것”')}</dt>
                  <dd>{t('중고차 거래 플랫폼 ‘첫차’를 운영하는 미스터픽의 최철훈 공동대표는 최근 뉴시스와 만나 중고차 시장 동향과 향후 비전에 대해 이같이 밝혔다. 최철훈, 송상훈 공동대표가 지난 20…')}</dd>
                  <dd className="media_origin">
                    <img src="https://img.chutcha.kr/files/website/sell/intro/media-logo-05.png" alt="뉴시스" />
                    <span>2020.01.02</span>
                  </dd>
                </dl>
              </a>
            </li>
          </ul>

          <ul className="sell_media_list display-mobile">
            <Swiper
              slidesPerView={1.3}
              spaceBetween={0}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="my-signal-global"
            >
              <SwiperSlide>
                <li>
                  <a href="https://www.asiatime.co.kr/article/20220511500455" target="_blank">
                    <dl>
                      <dd className="img"><img src="https://img.chutcha.kr/files/website/sell/intro/media-lmg-04.png" alt="보도사진" /></dd>
                      <dt>{t('중고차 경매')}</dt>
                      <dd>{t('모바일 중고차 플랫폼 첫차가 자사 내차팔기 서비스 ‘첫차옥션’ 의 누적 취급액이 3조9000억원을 돌파했다고 11일 밝혔다. 첫차옥션의 대대적인 개편 이후 약…')}</dd>
                      <dd className="media_origin">
                        <img src="https://img.chutcha.kr/files/website/sell/intro/media-logo-06.png" alt="아시아타임즈" />
                        <span>2022.05.11</span>
                      </dd>
                    </dl>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>

                <li>
                  <a href="https://news.naver.com/main/read.nhn?mode=LSD&amp;mid=sec&amp;sid1=103&amp;oid=005&amp;aid=0001449745" target="_blank">
                    <dl>
                      <dd className="img"><img src="https://img.chutcha.kr/files/website/sell/intro/media-lmg-01_02.png" alt="보도사진" /></dd>
                      <dt>{t('첫차, 중고차 조회서비스 ‘신호등검색’ 누적검색 100만건 돌파')}</dt>
                      <dd>{t('모바일 중고차 플랫폼 ‘첫차’는 22일 자사 실매물 조회 서비스인 ‘신호등검색’ 통계를 조사해보니 70%가 허위매물로 확인됐다고 밝혔다. 실매물은 28%에 그쳤고, 주의매물은…')}</dd>
                      <dd className="media_origin">
                        <img src="https://img.chutcha.kr/files/website/sell/intro/media-logo-04.png" alt="국민일보" />
                        <span>2021.06.22</span>
                      </dd>
                    </dl>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <a href="https://newsis.com/view/?id=NISX20191231_0000876254&amp;cID=13001&amp;pID=13000" target="_blank">
                    <dl>
                      <dd className="img"><img src="https://img.chutcha.kr/files/website/sell/intro/media-lmg-02_02.png" alt="보도사진" /></dd>
                      <dt>{t('첫차 최철훈 대표, “소비자 중심의 중고차 정보 플랫폼 만들 것”')}</dt>
                      <dd>{t('중고차 거래 플랫폼 ‘첫차’를 운영하는 미스터픽의 최철훈 공동대표는 최근 뉴시스와 만나 중고차 시장 동향과 향후 비전에 대해 이같이 밝혔다. 최철훈, 송상훈 공동대표가 지난 20…')}</dd>
                      <dd className="media_origin">
                        <img src="https://img.chutcha.kr/files/website/sell/intro/media-logo-05.png" alt="뉴시스" />
                        <span>2020.01.02</span>
                      </dd>
                    </dl>
                  </a>
                </li>
              </SwiperSlide>
            </Swiper>
          </ul>
        </div>
      </section>

      <section className="app_download_area">
        <div className="container-2">
          <div className="link_area">
            <p className="link_title">{t('이제 안전한 중고차 거래는')}<br />{t('첫차 어플로 해결하세요!')}</p>
            <p className="link_desc">{t('550만이 이용하는 첫차로 중고차 구매, 내차팔기 하세요!')}</p>
            <a href="https://apps.apple.com/kr/app/id982096152" className="app_store" target="_blank"><img src={require('../assets/images/sellcar/app_download_apple.png')} alt="App Store" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.mrpic.chutcha&amp;hl=ko" className="google_play" target="_blank"><img src={require('../assets/images/sellcar/app_download_google.png')} alt="Google Play" /></a>
          </div>
          <img src={require('../assets/images/sellcar/app_download_area_img.png')} alt="첫차" className="app_download_area_img" />
        </div>
      </section>
    </>
  )
}

export default SellCar