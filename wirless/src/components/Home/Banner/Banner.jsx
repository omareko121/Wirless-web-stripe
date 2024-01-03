import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>ســاعــتــك جــزء مـــن شــخــصــيــتــك</h1>
          <p>
            مـنـتـجاتــنـا تــسـاعــدك بـ الـارتــقــاء بـ شـخـصـيـتـك
            وانـاقـتـك بـ اعـلـى جــودة واســرع خــدمــة واقــل ســعــر
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2"> ! تسوق الان </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner;
