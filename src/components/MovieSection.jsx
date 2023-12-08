import React from 'react'
import { useTranslation } from 'react-i18next';
const MovieSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container movie-section-container">
      <div className="container-2 movie-section">
        <h1 className="main-title title-color">{t('중고차 1위 앱 첫차!')}</h1>
        <p className="big-text title-color">{t('첫차는 빅데이터 기술로 사람들이 중고차를 더 정확하고 안전하게 사고 팔 수 있도록 돕는 플랫폼입니다')}.</p>
        <img className="cover-image pt-4rem" src={require('../assets/images/buycar/chutcha_intro_logo.png')} alt="chutcha_intro_logo" />
        <span className="gray-text small-text">{t('2022년 하반기 기준')}</span>
        <div className="price-section pt-4rem">
          <p className="biggest-title title-color">{t('누적 다운로드')} <span className="blue-text">{t('550만')}</span></p>
          <p className="biggest-title title-color">{t('누적 거래액')} <span className="blue-text">{t('4조원')}</span></p>
          <p className="biggest-title title-color">{t('모바일 중고차 앱')} <span className="blue-text">{t('1위')}</span></p>
        </div>
        <img className="pt-4rem prize_img" src={require('../assets/images/buycar/chutcha_prize.png')} alt="chutcha_prize" />
        <p className="pt-1rem smaller-text gray-text">{t('앱스토어 2015년 ~ 2019년 현재 / 플레이스토어 2018년 3~6월 기준')}</p>
      </div>
    </section>
  )
}

export default MovieSection