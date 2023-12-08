import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { useTranslation } from 'react-i18next';
const Layout = ({ children }) => {
  const [handleScroll, setHandleScroll] = useState(false)
  useEffect(() => {

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setHandleScroll(true)
      } else {
        setHandleScroll(false)
      }
    })

  })
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const { t } = useTranslation();
  return (

    <>
      <section className="container">
        <Header />
        {children}
        <Footer />
      </section>
      <section className="to-top" style={handleScroll ? { display: 'block', } : { display: 'none' }} onClick={() => goToTop()}>
        <img src={require('../assets/images/buycar/11-btn-top@3x.png')} />
      </section>
      <section className="display-mobile">
        <a className="app_link_mobile" href="https://app.adjust.com/jsr?url=https%3A%2F%2Fhc8a.adj.st%2f%3fadjust_t=3adnrep%26adjust_deeplink_js=1%26adjust_deeplink=chutcha%3a%2f%2fgoto%26adjust_campaign=chut%26adjust_adgroup=main_floationg%26adjust_creative=download">{t('첫차 앱 다운로드')}</a>
      </section>
    </>
  )
}

export default Layout