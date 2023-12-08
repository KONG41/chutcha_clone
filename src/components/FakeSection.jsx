import React from 'react'
import { useTranslation } from 'react-i18next';
const FakeSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container fake-section">
      <div className="container-2 row">
        <span className="title-tag">{t('내차 살 때')}</span>
        <div className="desc_wrap ">
          <h1 className="biggest-title title-color">{t('중고차')} <span className="blue-text">{t('허위매물')}</span>{t('쯤은')}<br />{t('다 찾아냅니다')}</h1>
          <p className="big-text title-color">{t('빅데이터 기술로 허위매물을 꼼꼼히')}<br />{t('잡아내고 100% 실매물만 보여줘요!')}</p>
        </div>
        <div className="img_wrap ">
          <img src={require('../assets/images/buycar/fake_img.png')} alt="img" />
        </div>
      </div>
    </section>
  )
}

export default FakeSection