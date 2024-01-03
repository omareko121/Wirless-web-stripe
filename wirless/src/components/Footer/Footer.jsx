import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope, FaInstagram, FaFacebookMessenger, FaChalkboardTeacher, FaRocketchat } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Just Wirless</div>
          <div className="text">
            ويرلس ليست مجرد ساعة، بل هي رمز يبرز فخامتك وتميزك في المجتمع. نحن
            هنا لنبتكر مفهومًا جديدًا وواضحًا في عالم الأناقة البشرية، بهدف جعل
            مجتمعنا دائمًا متألقًا. اجعل ويرلس تعبيرًا قويًا عن أناقتك، ففي
            عالمنا ووحي خيالنا لا يوجد مثيل لنا 
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <a href="https://tawk.to/chat/6544cb17a84dd54dc4881b41/1heabiljl" target="_blank" rel="noopener noreferrer"><div className="c-item">
            <FaRocketchat />
            <div className="text2">
            للتواصل اضغط هنا
            </div>
          </div></a>

          <div className="c-item">
            <FaInstagram />
            <div className="text">
            wirless-support
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +966534259576</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: support@wirless.co</div>
          </div>
        </div>
        <div className="col">
        <div className="title">Categories</div>
          <span className="text">رجالية</span>
          <span className="text">نسائية</span>
          <span className="text">فريدة</span>
          <span className="text">فاخرة</span>
          <span className="text">رجالية فاخرة</span>
          <span className="text">نسائية فاخرة</span>
        </div>
        <div className="col">
          <div className="title">Our information</div>
          <span className="text">مـتـجـر مـرخـص</span>
          <span className="text">307800 : رقم منصة معروف </span>
    
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            WIRLESS 2024 &copy; CREATED AND MADE BY WIRLESS DEV TEAM.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
