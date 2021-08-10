import React from 'react'
import './Header2.css'
import { Link } from 'react-router-dom'
const Header1 = () => {
  const openNav1 = () => {
    document.getElementById('mySidepanel-header1').style.width = '250px'
  }

  const closeNav1 = () => {
    document.getElementById('mySidepanel-header1').style.width = '0'
  }
  return (
    <>
      <div className="header2">
        <hr></hr>
        <div className="header2__content1">
          <p id="header2_p1">VIEW</p>
          <p id="header2_p2">
            <Link to="productpage2">2</Link>
          </p>
          <p id="header2_p3">
            {' '}
            <strong>4</strong>
          </p>
          <p id="header2_p4">|</p>
          <p onClick={openNav1} id="header2_p5">
            +FILTERS
          </p>
        </div>
        <div className="header2__content2">
          <h1>SHOP THE LATEST TRENDS WITH ORIENT NEW IN COLLECTION </h1>
          <p>
            Shop the latest clothing trends with our weekly edit of what's new
            in online at Orient. From our latest Women Collection and TRF lines,
            we have <br></br>
            dresses,jeans,shoes,bags and more to suit every column and every
            occassion. EXplore the latest fashion trends here and now with us.
          </p>
        </div>
        <div className="header2__content3">
          <a id="header2_a1" href="#">
            <strong>UNSTICHED</strong>
          </a>
          <a id="header2_a2" href="#">
            <strong>PRET</strong>
          </a>
          <a id="header2_a3" href="#">
            <strong>EMBROIDERED</strong>
          </a>
        </div>
      </div>
      <div id="mySidepanel-header1" class="sidepanel-header1">
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
    </>
  )
}

export default Header1
