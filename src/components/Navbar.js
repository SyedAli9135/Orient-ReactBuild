import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css'
const Navbar = () => {
  const openNav = () => {
    document.getElementById('mySidepanel-Nav').style.width = '350px'
  }
  const closeNav = () => {
    document.getElementById('mySidepanel-Nav').style.width = '0'
  }
  return (
    <>
      <div className="custom-navbar">
        <div className="custom-navbarleft">
          <button onClick={openNav} id="custom-navbarbtn">
            ☰
          </button>
          <img id="navbar_img" width="70%" src={logo} />
        </div>
        <div className="custom-navbarcenter">
          <input id="custom-navbarbtn" type="text" placeholder="SEARCH"></input>
        </div>
        <div className="custom-navbarright">
          <p id="navbar_p1">LOG IN</p>
          <p id="navbar_p2">HELP</p>
          <i id="navbar_icon" class="fad fa-shopping-cart"></i>
        </div>
      </div>
      <div id="mySidepanel-Nav" class="sidepanel-Nav">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          ×
        </a>
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          ×
        </a>
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

export default Navbar
