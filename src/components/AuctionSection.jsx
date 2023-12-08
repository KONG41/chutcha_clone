import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import AuctionStepper from '../components/AuctionStepper';
import MAuctionStepper from '../components/MAuctionStepper';
import { useTranslation } from 'react-i18next';
const AuctionSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container auction-section-container">
      <div className="container-2 popular-section">
        <div className="top-head-title">
          <p className="desc-title gray-text">
            {t('첫차옥션에서 간편하게')}
          </p>
          <h1 className="head-title">{t('비교견적 받고 내 차 팔자')} <img src="https://img.chutcha.kr/files/website/chutcha_web/sub/icon_flying_money.png" alt="fire" /></h1>
        </div>
        <div className="display-content">
          <AuctionStepper />
          <MAuctionStepper />
        </div>
        <button className="primary-btn"><span>{t('비교견적 받기')}</span><MdKeyboardArrowRight /></button>
      </div>

    </section>
  )
}

export default AuctionSection