import React from 'react'
import { useTranslation } from 'react-i18next';
const ThemeSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container theme-section-container">
      <div className="container-2 popular-section">
        <div className="top-head-title">
          <p className="desc-title gray-text">
            {t('무슨 차를 사야할까?')}
          </p>
          <h1 className="head-title">{t('가격 / 테마별로 차량 보기')} <img src="https://img.chutcha.kr/files/website/chutcha_web/sub/icon_palette.png" alt="fire" /></h1>
        </div>
        <div className="display-card">
          <div className="grid-box space" style={{ backgroundImage: `url(${require('../assets/images/buycar/theme_01.jpg')})` }}>
            <div className="text-tag">
              <p>{t('2,000만원 미만의')}<br />{t('첫 수입차')}</p>
              <p>{t('부담 없이 즐기고 싶다면')}</p>
            </div>
          </div>
          <div className="grid-box space" style={{ backgroundImage: `url(${require('../assets/images/buycar/theme_02.jpg')})` }}>
            <div className="text-tag">
              <p>{t('2,000만원 미만의')}<br />{t('첫 수입차')}</p>
              <p>{t('부담 없이 즐기고 싶다면')}</p>
            </div>
          </div>
          <div className="grid-box space" style={{ backgroundImage: `url(${require('../assets/images/buycar/theme_03.jpg')})` }}>
            <div className="text-tag">
              <p>{t('2,000만원 미만의')}<br />{t('첫 수입차')}</p>
              <p>{t('부담 없이 즐기고 싶다면')}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ThemeSection