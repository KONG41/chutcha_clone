import React from 'react'
import { useTranslation } from 'react-i18next';
import CommentSection from '../components/CommentSection';
const StoreSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container store-section-container">
      <div className="container-2 popular-section">
        <div className="store-head-title">
          <h1>{t('앱스토어, 구글플레이')}</h1>
          <h1>{t('중고차 부문 1위!')}</h1>
        </div>
        <div className="store-app">
          <div className="app-store">
            <p className="app-title">App Store</p>
            <div className="app-rate">
              <img src="https://img.chutcha.kr/files/website/chutcha_web/sub/apple_logo_gray.png" alt="img" />
              <strong>4.7</strong>
            </div>
            <div className="start-rate">
              <img src={require('../assets/images/buycar/star_grade.png')} />
              <p>{t('2,213개의 평가')}</p>
            </div>

          </div>
          <div className="google-play">
            <p className="app-title">Google Play</p>
            <div className="app-rate">
              <img src="https://img.chutcha.kr/files/website/chutcha_web/sub/google_play_logo_gray.png" alt="img" />
              <strong>4.8</strong>
            </div>
            <div className="start-rate">
              <img src={require('../assets/images/buycar/star_grade.png')} />
              <p>{t('7,508개의 평가')}</p>
            </div>
          </div>
        </div>
        <CommentSection />
      </div>
    </section>
  )
}

export default StoreSection