import React from 'react'
import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import StoreBtn from '../components/StoreBtn';
import { useTranslation } from 'react-i18next';
const AppSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container app-section">
      <div className="container-2 app-view cover">
        <div className="left">
          <div className="top">
            <span className="main-visual-title"><img src={require('../assets/images/logo/logo_type_white_tr.png')} alt="main_visual_title" /></span>
            <span className="main-visual-text"><p>{t('중고차의 처음을 바꾸다')}<br />{t('중고차 1위 앱!')}</p></span>
          </div>
          <div className="bottom">
            <StoreBtn icon={<IoLogoApple />} text="App Store" />
            <StoreBtn icon={<IoLogoGooglePlaystore />} text="Play Store" />
          </div>
        </div>
        <div className="right">
          <img src={require('../assets/images/buycar/chutcha_app_view.png')} alt="top_visual_model_img" />
        </div>
      </div>
    </section>
  )
}

export default AppSection