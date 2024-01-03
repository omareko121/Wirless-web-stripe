import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaSnapchat,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">اشترك معنا للاخبار الحصرية</span>
        <span className="big-text">
      
      نود تذكيركم بأن جميع منتجاتنا تخضع للتحديثات المتكررة والتجديد. إذا كنتم مهتمين بالخصومات والعروض المثيرة، يُرجى تقديم عنوان بريدكم الإلكتروني للحصول على العروض الحصرية.
     <br />
     <br />
     ويرلس بكافة القائمين عليها تتطلع إلى تقديم تجربة تسوق مميزة. نتمنى لكم وقتاً سعيداً ونقدر اختياركم لمنتجاتنا. لا تترددوا في اختيار منتجاتكم بعناية فائقة.


        </span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>ارسال</button>
        </div>
        <span className="text">
        سيتم استخدام المعلومات بأمان وفقًا لسياسة الخصوصية الخاصة بنا
        </span>
        <span className="social-icons">
          <div className="icon">
            <a href="https://www.snapchat.com/add/wirless2" target="_blank" rel="noopener noreferrer"><FaSnapchat size={16} /></a>
          </div>
          <div className="icon">
            <a href="https://www.tiktok.com/@wirless1?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer"><FaTiktok size={16} /></a>
          </div>
          <div className="icon">
            <a href="https://www.instagram.com/wirlessshop/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer"><FaInstagram size={16} /></a>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
