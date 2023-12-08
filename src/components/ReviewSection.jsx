import React from 'react'
import { useTranslation } from 'react-i18next';
const ReviewSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container fake-section">
      <div className="container-2 row">
        <div className="desc_wrap ">
          <h1 className="biggest-title title-color"><span className="blue-text">{t('100% 리얼 후기')}</span>{t('를')}<br />{t('보여드립니다')}</h1>
          <p className="big-text title-color">{t('첫차에서 거래한 사람들의 진솔한 실제 후기와')}<br />{t('딜러 평가 점수를 볼 수 있어요')}.</p>
        </div>
        <div className="img_wrap ">
          <img src={require('../assets/images/buycar/review_img.png')} alt="img" />
        </div>
      </div>
    </section>
  )
}

export default ReviewSection