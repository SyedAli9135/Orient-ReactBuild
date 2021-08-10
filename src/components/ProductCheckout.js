import React from 'react'
import './ProductCheckout.css'
import Rectangle1 from '../images/Rectangle55.png'
import Rectangle2 from '../images/Rectangle56.png'
import Rectangle3 from '../images/Rectangle63.png'
import Footer from '../components/Footer'
import Navbar from './Navbar'
import SimilarItems from './SimilarItems'
import { useParams } from "react-router-dom";
const ProductCheckout = () => {
  const { id } = useParams();

  const openNav1 = () => {
    document.getElementById('mySidepanel1').style.width = '250px'
  }

  const closeNav1 = () => {
    document.getElementById('mySidepanel1').style.width = '0'
  }

  React.useEffect(()=>{
    alert(id);
  },[])

  return (
    <div>
      <Navbar />
      <React.Fragment>
        <hr></hr>
        <div className="product_checkout">
          <div className="images">
            <img src={Rectangle1} alt="" />
            <img src={Rectangle2} alt="" />
            <img src={Rectangle3} alt="" />
          </div>
          <div className="product_checkout_content">
            <div className="product_checkout_innerContent">
              <h3 id="h3">UNSTICHED 3PC PREMIUM JACQUARD SUIT</h3>
              <p id="p1">VIEW</p>
              <p id="p2">2</p>
              <p id="p3">4</p>
              <p id="p3">|</p>
              <p onClick={openNav1} href="#" id="p5">
                +FILTERS
              </p>
            </div>

            <p>
              Exercitation sunt consequat et proident cillum reprehenderit eu
              vest voluptate nostrud laborum
            </p>
            <div className="readmore">
              <a href="#">
                <strong>READ MORE</strong>
              </a>
            </div>

            <hr></hr>
            <div className="product_checkout_content1">
              {' '}
              <p>
                <strong>SKU:</strong>NRP-048 BLACK
              </p>
            </div>
            <div className="size">
              <p>
                <strong>SIZE</strong>
              </p>
            </div>

            <div className="product_checkout_buttons">
              <button id="btn1">XS</button>
              <button id="btn2">S</button>
              <button id="btn3">M</button>
              <button id="btn3">L</button>
              <button id="btn4">XL</button>
            </div>
            <div className="product_checkout_buttons2">
              <button id="checkout_btn1">BUY NOW</button>
              <button id="checkout_btn2">ADD TO CART</button>
            </div>
            <div className="product_checkout_icons">
              <p>Share</p>
              <i id="checkout_icon1" class="fab fa-facebook"></i>
              <i id="checkout_icon2" class="fab fa-whatsapp"></i>
            </div>
            <div className="product_checkout_icons2">
              <p>
                {' '}
                <i id="icon1" class="fas fa-chevron-right">
                  {' '}
                </i>
                Shipping and Returns
              </p>

              <p>
                {' '}
                <i id="icon2" class="fas fa-chevron-right"></i>Size Guide
              </p>
            </div>
          </div>
        </div>
        <div id="mySidepanel1" class="sidepanel1">
          <a
            style={{ fontSize: 'small' }}
            href="javascript:void(0)"
            class="closebtn"
            onClick={closeNav1}
          >
            CLEAR
          </a>
          <a style={{ fontSize: 'large' }} href="#">
            <h3>SIZE</h3>
          </a>
          <a style={{ fontSize: 'medium' }} href="#">
            <p>EU 32/ US 0</p>
          </a>
          <a style={{ fontSize: 'medium' }} href="#">
            <p>EU 34/ US 2</p>
          </a>
          <a style={{ fontSize: 'medium' }} href="#">
            <p>EU 36 / US 4</p>
          </a>
          <a style={{ fontSize: 'medium' }} href="#">
            <p>+ VIEW MORE</p>
          </a>
          <a style={{ fontSize: 'small' }} href="#">
            <h3>
              <p>COLOUR</p>
            </h3>
          </a>
          <a style={{ fontSize: 'small' }} href="#">
            <p>BEIGE</p>
          </a>
          <a style={{ fontSize: 'small' }} href="#">
            <p>BLACK</p>
          </a>
          <a style={{ fontSize: 'small' }} href="#">
            <p>BLUE</p>
          </a>
          <a style={{ fontSize: 'small' }} href="#">
            <p>+ VIEW MORE</p>
          </a>
          <a style={{ fontSize: 'small' }} href="#">
            <h3>COLLECTION</h3>
          </a>
          <a style={{ fontSize: 'small' }} href="#">
            <p>BASIC</p>
          </a>
          <a style={{ fontSize: 'small' }} href="#">
            <p>TRF</p>
          </a>
          <a style={{ fontSize: 'small' }} href="#">
            <p>WOMAN</p>
          </a>
        </div>
      </React.Fragment>
      <SimilarItems />
      <Footer />
    </div>
  )
}

export default ProductCheckout
