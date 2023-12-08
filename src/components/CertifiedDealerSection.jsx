import React from 'react'
import { useTranslation } from 'react-i18next';
const CertifiedDealerSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container fake-section">
      <div className="container-2 row-reverse">
        <div className="desc_wrap ">
          <h1 className="biggest-title title-color"><span className="blue-text">{t('인증심사')}</span>{t('를 통과한')}<br />{t('딜러만 활동합니다')}</h1>
          <p className="big-text title-color">{t('국내 유일! 전국 규모의 첫차 방문심사를')}<br />{t('우수한 성적으로 통과한 인증딜러를 소개해요')}.</p>
        </div>
        <div className="img_wrap ">
          <img src={require('../assets/images/buycar/certified_dealer.png')} alt="img" />
        </div>
      </div>
    </section>
  )
}

export default CertifiedDealerSection