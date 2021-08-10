import React from 'react'
import './LandingPage.css'
import logo from '../images/logo.png'
import easypaisa from '../images/easypaisa.jpg'
import cc from '../images/2cc.jpg'
import mastercard from '../images/mastercard.jpg'
import unionpay from '../images/unionpay.jpg'
import visa from '../images/visa.jpg'
import android from '../images/android.png'
import iphone from '../images/iphone.png'
import keenu from '../images/keenu.jpg'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  const openNav = () => {
    document.getElementById('mySidepanel').style.width = '350px'
  }

  const closeNav = () => {
    document.getElementById('mySidepanel').style.width = '0'
  }
  return (
    <>
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
          <button class="openbtn" onMouseOver={openNav} onMouseLeave={closeNav}>
            ☰
          </button>
          <a class="navbar-brand" href="#">
            <img class="orient" src={logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbar_input" class=" nav navbar-nav navbar-center">
            <input type="text" placeholder="SEARCH" />
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mx-auto"></div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-white" href="page2modifiedfinal.html">
                  LOG IN
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="page2modifiedfinal.html">
                  HELP
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  <i class="fal fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="banner-area">
          <div
            style={{
              position: 'fixed',
              left: '20px',
              top: '50%',
              color: '#eee',
              fontWeight: '500',
            }}
            class="left-arrow"
          >
            <a
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
              href="page2modifiedfinal.html"
            >
              KIDS WEAR
            </a>
          </div>
          <div
            style={{
              position: 'fixed',
              right: '20px',
              top: '50%',
              color: '#eee',
              fontWeight: '500',
            }}
            class="right-arrow"
          >
            <a
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
              href="page2modifiedfinal.html"
            >
              UNSTICHED
            </a>
          </div>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '20px',
              color: 'whitesmoke',
            }}
            class="bottom-arrow"
          >
            <i class="fas fa-chevron-down"></i>
          </div>
          <div class="content-area">
            <div class="content">
              <h1>
                <strong>NEW IN</strong>
              </h1>

              <p>
                SELECTED PIECES WITH NEW PICTURES CURATED FOR YOU. 2020 WOMEN
                <br />
                COLLECTIONS SELECTED PIECES WITH NEW
              </p>

              <button class="btn">
                <Link
                  style={{ textDecoration: 'none', color: 'whitesmoke' }}
                  to="/productpage1"
                >
                  VIEW
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div class="banner-area0">
          <div
            style={{
              position: 'fixed',
              left: '20px',
              top: '50%',
              color: '#eee',
              fontWeight: '500',
            }}
            class="left-arrow"
          >
            <a
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
              href="page2modifiedfinal.html"
            >
              KIDS WEAR
            </a>
          </div>
          <div
            style={{
              position: 'fixed',
              right: '20px',
              top: '50%',
              color: '#eee',
              fontWeight: '500',
            }}
            class="right-arrow"
          >
            <a
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
              href="page2modifiedfinal.html"
            >
              UNSTICHED
            </a>
          </div>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '20px',
              color: 'whitesmoke',
            }}
            class="bottom-arrow"
          >
            <i class="fas fa-chevron-down"></i>
          </div>

          <div class="content-area">
            <div class="content">
              <h1>
                <strong>EMBROIDERED</strong>
              </h1>

              <p>
                SELECTED PIECES WITH NEW PICTURES CURATED FOR YOU. 2020 WOMEN
                <br />
                COLLECTIONS SELECTED PIECES WITH NEW
              </p>

              <button class="btn">
                <Link
                  style={{ textDecoration: 'none', color: 'whitesmoke' }}
                  to="/productpage1"
                >
                  VIEW
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div class="banner-area1">
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '20px',
              color: 'whitesmoke',
            }}
            class="bottom-arrow"
          >
            <i class="fas fa-chevron-down"></i>
          </div>
          <div
            style={{
              position: 'fixed',
              left: '20px',
              top: '50%',
              color: '#eee',
              fontWeight: '500',
            }}
            class="left-arrow"
          >
            <a
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
              href="page2modifiedfinal.html"
            >
              KIDS WEAR
            </a>
          </div>
          <div
            style={{
              position: 'fixed',
              right: '20px',
              top: '50%',
              color: '#eee',
              fontWeight: '500',
            }}
            class="right-arrow"
          >
            <a
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
              href="page2modifiedfinal.html"
            >
              UNSTICHED
            </a>
          </div>
          <div class="content-area">
            <div class="content">
              <h1>
                <strong>COLLECTION</strong>
              </h1>
              <p>
                SELECTED PIECES WITH NEW PICTURES CURATED FOR YOU. 2020 WOMEN
                <br />
                COLLECTIONS SELECTED PIECES WITH NEW
              </p>

              <button class="btn">
                <Link
                  style={{ textDecoration: 'none', color: 'whitesmoke' }}
                  to="/productpage1"
                >
                  VIEW
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div class="banner-area2">
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '20px',
              color: 'whitesmoke',
            }}
            class="bottom-arrow"
          >
            <i class="fas fa-chevron-down"></i>
          </div>
          <div
            style={{
              position: 'fixed',
              left: '20px',
              top: '50%',
              color: '#eee',
              fontWeight: '500',
            }}
            class="left-arrow"
          >
            <a
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
              href="page2modifiedfinal.html"
            >
              KIDS WEAR
            </a>
          </div>
          <div
            style={{
              position: 'fixed',
              right: '20px',
              top: '50%',
              color: '#eee',
              fontWeight: '500',
            }}
            class="right-arrow"
          >
            <a
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
              href="page2modifiedfinal.html"
            >
              UNSTICHED
            </a>
          </div>
          <div class="content-area">
            <div class="content">
              <h1>
                <strong>JOIN LIFE</strong>
              </h1>

              <p>
                SELECTED PIECES WITH NEW PICTURES CURATED FOR YOU.
                <br />
                2020 WOMEN COLLECTIONS
                <br />
                SELECTED PIECES WITH NEW PICTURE CURRATED FOR YOU
              </p>

              <button class="btn">
                <Link
                  style={{ textDecoration: 'none', color: 'whitesmoke' }}
                  to="/productpage1"
                >
                  VIEW
                </Link>
              </button>
            </div>
          </div>
        </div>
        <footer class="page-footer">
          <div class="container ">
            <div class="column text-center d-flex justify-content-center pt-5 mb-3 ">
              <h1 class="font-weight-bold">JOIN OUR NEWSLETTER </h1>
            </div>
            <div class="column text-center d-flex justify-content-center">
              <div class="col-xs-4">
                <input
                  type="text"
                  id="search"
                  placeholder="Enter your email here "
                />
              </div>
            </div>

            <div class="column text-center d-flex justify-content-center">
              <div
                class="mb-5 flex-center overflow-x:hidden"
                style={{
                  overflowY: 'hidden',
                  paddingTop: '10px',
                  height: '100%',
                }}
              >
                <a style={{ padding: '10px', color: 'black' }} class="fb-ic">
                  <i
                    class="fab fa-facebook-f fa-lg white-text mr-md-3 mr-3 fa-1x"
                    style={{
                      overflowY: 'hidden',
                      paddingTop: '10px',
                      height: '100%',
                    }}
                  >
                    {' '}
                  </i>
                </a>

                <a style={{ padding: '10px', color: 'black' }} class="ins-ic">
                  <i
                    class="fab fa-instagram fa-lg white-text mr-md-3 mr-3 fa-1x"
                    style={{
                      overflowY: 'hidden',
                      paddingTop: '10px',
                      height: '100%',
                    }}
                  >
                    {' '}
                  </i>
                </a>

                <a style={{ padding: '10px', color: 'black' }} class="pin-ic">
                  <i
                    class="fab fa-youtube fa-lg gray-text fa-1x"
                    style={{
                      overflowY: 'hidden',
                      paddingTop: '10px',
                      height: '100%',
                    }}
                  >
                    {' '}
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div class="row text-center d-flex justify-content-center pt-5 mb-3">
            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase">
                <p>CUSTOMER SUPPORT</p>
              </h6>
            </div>

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase">
                <p>GET TO KNOW US</p>
              </h6>
            </div>

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase">
                <p>LET US HELP YOU</p>
              </h6>
            </div>

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase">
                <p>ORIENT FOR BUISNESS</p>
              </h6>
            </div>
          </div>

          <div class="row text-center d-flex justify-content-center pt-2 mb-3">
            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase">
                <p>PRIVACY POLICY</p>
              </h6>
            </div>
            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase">
                <p>TERMS OF US</p>
              </h6>
            </div>
          </div>

          <div class="row">
            <div class="column ">
              <img
                style={{ marginLeft: '2%' }}
                src={easypaisa}
                width="50px"
                height="50px"
              />
              <img
                style={{ marginLeft: '2%' }}
                src={cc}
                width="50px"
                height="50px"
              />
              <img
                style={{ marginLeft: '2%' }}
                src={visa}
                height="50px"
                width="50px"
              />
              <img
                style={{ marginLeft: '2%' }}
                src={mastercard}
                height="50px"
                width="50px"
              />
              <img
                style={{ marginLeft: '2%' }}
                src={keenu}
                width="50px"
                height="50px"
              />
              <img
                style={{ marginLeft: '2%' }}
                src={unionpay}
                height="50px"
                width="50px"
              />
              <img
                style={{ marginLeft: '55%' }}
                src={iphone}
                width="99px"
                height="33.12px"
              />
              <img
                style={{ marginLeft: '1%' }}
                src={android}
                width="99px"
                height="33.12px"
              />
            </div>
          </div>
          <div class="footer-copyright text-center py-3">
            © 2020 Orient Textiles Inc. All Private Limited
          </div>
        </footer>
      </div>

      <div id="mySidepanel" class="sidepanel">
        <a style={{ fontSize: 'large' }} href="#">
          <h1>WOMAN</h1>
        </a>
        <a style={{ fontSize: 'medium' }} href="#">
          <p>NEW IN</p>
        </a>
        <a style={{ fontSize: 'medium' }} href="#">
          <p>UNSTICHED COLLECTION</p>
        </a>
        <a style={{ fontSize: 'medium' }} href="#">
          <p>READY TO WEAR</p>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <h3>
            <p>VIEW all</p>
          </h3>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <p>PRET</p>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <p>UNSTICHED</p>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <p>SHIRTS</p>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <p>TOPS</p>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <p>KNITWEAR</p>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <p>PANTS</p>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <p>BAGS</p>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <p>SHOES</p>
        </a>
        <a style={{ fontSize: 'small' }} href="#">
          <p>ACCESSORIES</p>
        </a>
      </div>
    </>
  )
}

export default LandingPage
