import React, { useState } from 'react'
import './Footer.css'
import easypaisa from '../images/easypaisa.jpg'
import cc from '../images/2cc.jpg'
import mastercard from '../images/mastercard.jpg'
import unionpay from '../images/unionpay.jpg'
import visa from '../images/visa.jpg'
import android from '../images/android.png'
import iphone from '../images/iphone.png'
import keenu from '../images/keenu.jpg'
const FooterCustom = () => {
  const [email, setEmail] = useState('')
  return (
    <>
      <div className="footer">
        <div className="footer-content1">
          <h1>JOIN OUR NEWSLETTER</h1>
          <input
            value={email}
            type="text"
            placeholder="Enter your email here"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="icons">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube-square"></i>
        </div>
        <div className="footer_content">
          <p>CUSTOMER SUPPORT</p>
          <p>GET TO KNOW US</p>
          <p>LET US HELP YOU</p>
          <p>ORIENT BUISNESS</p>
        </div>
        <div className="footer_content1">
          <p>PRIVACY POLICY</p>
          <p>TERMS OF USE</p>
        </div>
      </div>
      <div className="icons">
        <div className="iconsright">
          <img src={easypaisa} alt="" />
          <img src={cc} alt="" />
          <img src={visa} alt="" />
          <img src={mastercard} alt="" />
          <img src={keenu} alt="" />
          <img src={unionpay} alt="" />
        </div>
        <div className="iconsLeft">
          <img src={android} alt="" />
          <img src={iphone} alt="" />
        </div>
      </div>
      <div className="copyright">
        <p>© 2020 Orient Textiles.Inc All Rights Reserved</p>
      </div>
    </>
  )
}

export default FooterCustom
