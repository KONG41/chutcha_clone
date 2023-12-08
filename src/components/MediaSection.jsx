import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowRight } from "react-icons/md";
const MediaSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container media-section-container">
      <div className="container-2 popular-section">
        <div className="top-head-title">
          <p className="desc-title gray-text">
            {t('요즘 첫차 어때?')}
          </p>
          <h1 className="head-title">{t('언론에서 만나는 첫차')} <img src="https://img.chutcha.kr/files/website/chutcha_web/sub/icon_newspaper.png" alt="fire" /></h1>
        </div>
        <div className="media-content">
          <div className="media-grid">
            <div className="media-desc">
              <p className="gray-text small-text"><span className="blue-text">{t('아시아타임즈')}</span><span> | </span><span>2022.05.11</span></p>
              <p className="big-text">{t('중고차 경매')}<br />{t('취급액 4조원 육박')}</p>
            </div>
            <div className="media-img">
              <img src={require('../assets/images/buycar/news_05.jpg')} alt="img" />
            </div>
          </div>
          <div className="media-grid">
            <div className="media-desc">
              <p className="gray-text small-text"><span className="blue-text">{t('아시아타임즈')}</span><span> | </span><span>2022.05.11</span></p>
              <p className="big-text">{t('중고차 경매')}<br />{t('취급액 4조원 육박')}</p>
            </div>
            <div className="media-img">
              <img src={require('../assets/images/buycar/news_03.jpg')} alt="img" />
            </div>
          </div>
          <div className="media-grid">
            <div className="media-desc">
              <p className="gray-text small-text"><span className="blue-text">{t('아시아타임즈')}</span><span> | </span><span>2022.05.11</span></p>
              <p className="big-text">{t('중고차 경매')}<br />{t('취급액 4조원 육박')}</p>
            </div>
            <div className="media-img">
              <img src={require('../assets/images/buycar/news_02.jpg')} alt="img" />
            </div>
          </div>
          <div className="media-grid">
            <div className="media-desc">
              <p className="gray-text small-text"><span className="blue-text">{t('아시아타임즈')}</span><span> | </span><span>2022.05.11</span></p>
              <p className="big-text">{t('중고차 경매')}<br />{t('취급액 4조원 육박')}</p>
            </div>
            <div className="media-img">
              <img src={require('../assets/images/buycar/news_01.jpg')} alt="img" />
            </div>
          </div>
        </div>
        <button className="primary-btn"><span>{t('비교견적 받기')}</span><MdKeyboardArrowRight /></button>
      </div>
    </section>
  )
}

export default MediaSection