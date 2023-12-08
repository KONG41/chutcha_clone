import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri';
import { AiOutlineUp } from 'react-icons/ai'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from 'react-i18next';
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
const CommentSection = () => {
  const { t } = useTranslation();
  return (
    <><div className="cmt-section">
      <div className="cmt-box">
        <span className="quote"><RiDoubleQuotesL /></span>
        <div className="cmt-desc">
          <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
          <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
        </div>
        <div className="reviewer-section">
          <img src={require('../assets/images/buycar/reviewer_01.png')} />
          <div className="reviewer-name">
            <p>{t('김진선님')}</p>
            <p>{t('프로그래머')} · {t('35세')}</p>
          </div>
        </div>
      </div>
      <div className="cmt-box">
        <span className="quote"><RiDoubleQuotesL /></span>
        <div className="cmt-desc">
          <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
          <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
        </div>
        <div className="reviewer-section">
          <img src={require('../assets/images/buycar/reviewer_01.png')} />
          <div className="reviewer-name">
            <p>{t('김진선님')}</p>
            <p>{t('프로그래머')} · {t('35세')}</p>
          </div>
        </div>
      </div>
      <div className="cmt-box">
        <span className="quote"><RiDoubleQuotesL /></span>
        <div className="cmt-desc">
          <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
          <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
        </div>
        <div className="reviewer-section">
          <img src={require('../assets/images/buycar/reviewer_01.png')} />
          <div className="reviewer-name">
            <p>{t('김진선님')}</p>
            <p>{t('프로그래머')} · {t('35세')}</p>
          </div>
        </div>
      </div>
      <div className="cmt-box">
        <span className="quote"><RiDoubleQuotesL /></span>
        <div className="cmt-desc">
          <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
          <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
        </div>
        <div className="reviewer-section">
          <img src={require('../assets/images/buycar/reviewer_01.png')} />
          <div className="reviewer-name">
            <p>{t('김진선님')}</p>
            <p>{t('프로그래머')} · {t('35세')}</p>
          </div>
        </div>
      </div>
      <div className="cmt-box">
        <span className="quote"><RiDoubleQuotesL /></span>
        <div className="cmt-desc">
          <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
          <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
        </div>
        <div className="reviewer-section">
          <img src={require('../assets/images/buycar/reviewer_01.png')} />
          <div className="reviewer-name">
            <p>{t('김진선님')}</p>
            <p>{t('프로그래머')} · {t('35세')}</p>
          </div>
        </div>
      </div>
      <div className="cmt-box">
        <span className="quote"><RiDoubleQuotesL /></span>
        <div className="cmt-desc">
          <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
          <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
        </div>
        <div className="reviewer-section">
          <img src={require('../assets/images/buycar/reviewer_01.png')} />
          <div className="reviewer-name">
            <p>{t('김진선님')}</p>
            <p>{t('프로그래머')} · {t('35세')}</p>
          </div>
        </div>
      </div>
    </div>
      <div className="m-cmt-section">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={30}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="m-cmt-swiper"
        >
          <SwiperSlide>
            <div className="cmt-box">
              <span className="quote"><RiDoubleQuotesL /></span>
              <div className="cmt-desc">
                <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
                <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
              </div>
              <div className="reviewer-section">
                <img src={require('../assets/images/buycar/reviewer_01.png')} />
                <div className="reviewer-name">
                  <p>{t('김진선님')}</p>
                  <p>{t('프로그래머')} · {t('35세')}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cmt-box">
              <span className="quote"><RiDoubleQuotesL /></span>
              <div className="cmt-desc">
                <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
                <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
              </div>
              <div className="reviewer-section">
                <img src={require('../assets/images/buycar/reviewer_01.png')} />
                <div className="reviewer-name">
                  <p>{t('김진선님')}</p>
                  <p>{t('프로그래머')} · {t('35세')}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cmt-box">
              <span className="quote"><RiDoubleQuotesL /></span>
              <div className="cmt-desc">
                <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
                <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
              </div>
              <div className="reviewer-section">
                <img src={require('../assets/images/buycar/reviewer_01.png')} />
                <div className="reviewer-name">
                  <p>{t('김진선님')}</p>
                  <p>{t('프로그래머')} · {t('35세')}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cmt-box">
              <span className="quote"><RiDoubleQuotesL /></span>
              <div className="cmt-desc">
                <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
                <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
              </div>
              <div className="reviewer-section">
                <img src={require('../assets/images/buycar/reviewer_01.png')} />
                <div className="reviewer-name">
                  <p>{t('김진선님')}</p>
                  <p>{t('프로그래머')} · {t('35세')}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cmt-box">
              <span className="quote"><RiDoubleQuotesL /></span>
              <div className="cmt-desc">
                <h1 className="big-title">{t('첫차를 잘 장만했어요')}!</h1>
                <p className="big-text">{t('중고차 구매가 걱정돼서 이곳저곳 많이 물어보곤 했는데 첫차에서는 필요한 정보가 보기 쉽게 다 공개되어있어서 구매가 편했어요')}.</p>
              </div>
              <div className="reviewer-section">
                <img src={require('../assets/images/buycar/reviewer_01.png')} />
                <div className="reviewer-name">
                  <p>{t('김진선님')}</p>
                  <p>{t('프로그래머')} · {t('35세')}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div></>
  )
}

export default CommentSection