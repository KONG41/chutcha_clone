import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowRight } from "react-icons/md";
const PopularSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container popular-section-container">
      <div className="container-2 popular-section">
        <div className="top-head-title">
          <p className="desc-title gray-text">
            {t('요샌 어떤 차가 인기지?')}
          </p>
          <h1 className="head-title">{t('지금 가장 핫한 차량 보기')} <img src="https://img.chutcha.kr/files/website/chutcha_web/sub/icon_flame.png" alt="fire" /></h1>
        </div>
        <div className="display-card">
          <div className="grid-card space">
            <div className="card-img">
              <img src={require('../assets/images/buycar/popular_01.jpg')} alt="img" />
            </div>
            <div className="card-desc">
              <h1>{t('기아 올 뉴 스포티지')} <br /> {t('디젤 1.7 2WD 노블레스')}</h1>
              <span className="gray-text date">{t('인천 · 16년 12월 · 53,000km')}</span>
              <div className="light-blue-text price"> <span>{t('1,599만원')}</span><span className="space gray-text"> / </span><span>{t('월 28만원')}</span></div>
              <div className="btn-tag">
                <span className="tag">{t('안심차량')}</span>
                <span className="tag">{t('리스가능')}</span>
              </div>
            </div>
          </div>
          <div className="grid-card space">
            <div className="card-img">
              <img src={require('../assets/images/buycar/popular_02.jpg')} alt="img" />
            </div>
            <div className="card-desc">
              <h1>{t('기아 올 뉴 스포티지')} <br /> {t('디젤 1.7 2WD 노블레스')}</h1>
              <span className="gray-text date">{t('인천 · 16년 12월 · 53,000km')}</span>
              <div className="light-blue-text price"> <span>{t('1,599만원')}</span><span className="space gray-text"> / </span><span>{t('월 28만원')}</span></div>
              <div className="btn-tag">
                <span className="tag">{t('안심차량')}</span>
                <span className="tag">{t('리스가능')}</span>
              </div>
            </div>
          </div>
          <div className="grid-card space">
            <div className="card-img">
              <img src={require('../assets/images/buycar/popular_03.jpg')} alt="img" />
            </div>
            <div className="card-desc">
              <h1>{t('기아 올 뉴 스포티지')} <br /> {t('디젤 1.7 2WD 노블레스')}</h1>
              <span className="gray-text date">{t('인천 · 16년 12월 · 53,000km')}</span>
              <div className="light-blue-text price"> <span>{t('1,599만원')}</span><span className="space gray-text"> / </span><span>{t('월 28만원')}</span></div>
              <div className="btn-tag">
                <span className="tag">{t('안심차량')}</span>
                <span className="tag">{t('리스가능')}</span>
              </div>
            </div>
          </div>
          <div className="grid-card space">
            <div className="card-img">
              <img src={require('../assets/images/buycar/popular_04.jpg')} alt="img" />
            </div>
            <div className="card-desc">
              <h1>{t('기아 올 뉴 스포티지')} <br /> {t('디젤 1.7 2WD 노블레스')}</h1>
              <span className="gray-text date">{t('인천 · 16년 12월 · 53,000km')}</span>
              <div className="light-blue-text price"> <span>{t('1,599만원')}</span><span className="space gray-text"> / </span><span>{t('월 28만원')}</span></div>
              <div className="btn-tag">
                <span className="tag">{t('안심차량')}</span>
                <span className="tag">{t('리스가능')}</span>
              </div>
            </div>
          </div>
        </div>
        <button className="primary-btn"><span>{t('차량 더보기')}</span><MdKeyboardArrowRight /></button>
      </div>
    </section>
  )
}

export default PopularSection