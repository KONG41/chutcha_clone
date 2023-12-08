import React from 'react'
import { Link } from 'react-router-dom'
import { SlSocialInstagram, SlSocialYoutube, SlSocialFacebook } from "react-icons/sl";
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <section className="container footer-container">
      <div className="footer container-2">
        <div className="left">
          <div className="footer-menu">
            <ul>
              <li><Link to="#">{t('이용약관')}</Link></li>
              <li><Link to="#">{t('개인정보처리방침')}</Link></li>
              <li><Link to="#">{t('제휴 문의')}</Link></li>
            </ul>
          </div>
          <div className="social-media">
            <ul>
              <li><Link to="#"><SlSocialInstagram /></Link></li>
              <li><Link to="#"><SlSocialYoutube /></Link></li>
              <li><Link to="#"><SlSocialFacebook /></Link></li>
            </ul>
          </div>
          <div className="language">
            <ul>
              <li>
                <select defaultValue={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
                  <option value="en">English</option>
                  <option value="kr">Korea</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="copyright">
            <img src={require('../assets/images/logo/logo_type_gray.png')} alt="logo_gray_type" />
            <span className="simple-text">© MR.PIC Corp. All rights reserved.</span>
          </div>
          <div className="contact">
            <span><p>({t('주')}){t('미스터픽 | 대표 최철훈, 송상훈')}</p><p>{t('서울특별시 강남구 테헤란로 447, KB 우준타워 16층')}</p></span>
            <span><p>{t('대표전화 1666-8984')} | {t('사업자등록번호 120-88-08982')}</p><p>{t('통신판매업신고번호 제2016-서울강남-03041호')}</p></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer