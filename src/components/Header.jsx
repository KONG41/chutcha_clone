import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5"
import { useTranslation } from 'react-i18next';
// menu function
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
// end of menu function



const Header = () => {
  // hide show mobile menu
  const [isNavBar, setIsNavBar] = useState(false);
  const [screenHeight, setScreenHeight] = useState();
  const handleHamburgerMenu = () => {
    setIsNavBar(!isNavBar);
  }
  const handleSetOverscroll = () => {
    document.body.style.setProperty('overflow', 'hidden');
  }
  const handleUnsetOverscroll = () => {
    document.body.style.setProperty('overflow', 'unset');
  }
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    if (window.innerWidth > 830) {
      setIsNavBar(false);
      handleUnsetOverscroll()
    }
    function detectHeight() {
      setScreenHeight(window.innerHeight);
    }
    return () => { window.removeEventListener('resize', handleResize); detectHeight(); }
  }, [windowDimensions]);
  // end of hide and show mobile menu 
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <section className="container header-container">
        <div className="header container-2">
          <div className="logo">
            <Link to="/"><img src={require('../assets/images/logo/logo_type_white_tr.png')} alt="logo" /></Link>

          </div>
          <div className="menu">
            <ul>
              <li><NavLink to="/">{t('내차구매')}</NavLink></li>
              <li><NavLink to="/sellcar">{t('내차팔기')}</NavLink></li>
              <li><NavLink to="/trafficlight">{t('신호등 검색')}</NavLink></li>

            </ul>
          </div>
          <div className="hamburger-btn" onClick={() => { handleHamburgerMenu(); handleSetOverscroll() }}><RxHamburgerMenu /></div>
        </div>
      </section>
      {
        isNavBar &&
        <section className="m-header" style={{ height: `${screenHeight}px` }}>
          <div className="m-menu-header">
            <Link to="/" onClick={() => { handleHamburgerMenu(); handleUnsetOverscroll() }}><img src={require('../assets/images/logo/logo_type_blue_tr.png')} /></Link>
            <div className="close-btn" onClick={() => { handleHamburgerMenu(); handleUnsetOverscroll() }}><IoCloseOutline /></div>
          </div>
          <div className="m-menu">
            <ul>
              <li><NavLink to="/" onClick={() => { handleHamburgerMenu(); handleUnsetOverscroll() }}>{t('내차구매')}</NavLink></li>
              <li><NavLink to="/sellcar" onClick={() => { handleHamburgerMenu(); handleUnsetOverscroll() }}>{t('내차팔기')}</NavLink></li>
              <li><NavLink to="/trafficlight" onClick={() => { handleHamburgerMenu(); handleUnsetOverscroll() }}>{t('신호등 검색')}</NavLink></li>
            </ul>
          </div>
          <div className="m-social-media">
            <ul>
              <li><img src={require('../assets/images/social-icon/logo_insta_gray.png')} /></li>
              <li><img src={require('../assets/images/social-icon/logo_youtube_gray.png')} /></li>
              <li><img src={require('../assets/images/social-icon/logo_facebook_gray.png')} /></li>
              <li><img src={require('../assets/images/social-icon/logo_naver_gray.png')} /></li>
              <li><img src={require('../assets/images/social-icon/logo_blog_gray.png')} /></li>
            </ul>
          </div>

        </section>
      }


    </>
  )
}

export default Header