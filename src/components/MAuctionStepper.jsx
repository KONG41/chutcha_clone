import React from 'react'
import { useTranslation } from 'react-i18next';
const MAuctionStepper = () => {
  const { t } = useTranslation()
  return (
    <section className="m-auction-stepper">
      <ol>
        <li>
          <h1>{t('사진 3장 등록하기')}</h1>
          <p>{t('간편하게 내 차 사진 3장만 등록해보세요! 1분이면 끝')}!</p>
          <div className="mobile-only">
            <img src={require('../assets/images/buycar/auction_slide_01.jpg')} />
          </div>

        </li>
        <li>
          <h1>{t('무제한 비교견적 받기')}</h1>
          <p>{t('전국 딜러들의 경쟁을 통해 전화없이 무제한으로 견적을 받아보세요')}.</p>
          <div className="mobile-only">
            <img src={require('../assets/images/buycar/auction_slide_02.jpg')} />
          </div>

        </li>
        <li>
          <h1>{t('견적 선택하면 완료')}</h1>
          <p>{t('마음에 드는 견적을 선택하면, 원하는 장소로 방문해 매입합니다. 수수료는 0원')}!</p>
          <div className="mobile-only">
            <img src={require('../assets/images/buycar/auction_slide_03.jpg')} />
          </div>

        </li>
      </ol>
    </section>
  )
}

export default MAuctionStepper