import React from 'react'
import { IoLogoApple } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import StoreBtn from '../components/StoreBtn';
const MainVisualSection = () => {
  return (
    <section className="container buy-car-cover">
      <div className="container-2 buy-car cover">
        <div className="left">
          <div className="top">
            <span className="main-visual-title"><img src={require('../assets/images/cover/buycar/main_visual_title.png')} alt="main_visual_title" /></span>
            <span className="main-visual-text"><img src={require('../assets/images/cover/buycar/main_visual_text.png')} alt="main_visual_text" /></span>
          </div>
          <div className="bottom m-none">
            <StoreBtn icon={<IoLogoApple />} text="App Store" />
            <StoreBtn icon={<IoLogoGooglePlaystore />} text="Play Store" />
          </div>
        </div>
        <div className="right">
          <img src={require('../assets/images/cover/top_visual_model_img.png')} alt="top_visual_model_img" />
        </div>
      </div>
    </section>
  )
}

export default MainVisualSection