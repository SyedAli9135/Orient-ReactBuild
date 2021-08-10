import React from 'react'
import Header2 from './Header2'
import Navbar from './Navbar'
import './ProductPage1.css'
import Footer from './Footer'

const ProductPage1 = () => {
  const data = [
    {
      id: 1,
      image: '../images/Rectangle55.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 2,
      image: '../images/Rectangle56.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 3,
      image: '../images/Rectangle63.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 4,
      image: '../images/Rectangle64.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 5,
      image: '../images/Rectangle63.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 6,
      image: '../images/Rectangle64.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 7,
      image: '../images/Rectangle63.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
    {
      id: 8,
      image: '../images/Rectangle64.png',
      title: 'NEW',
      text: 'UNSTICHED 3PC PREMIUM ',
      price: 'PKR 4,990.00',
    },
  ]
  return (
    <div>
      <div>
        <div className="productpage1">
          <h3>SIMILAR ITEMS</h3>
          <p>8 ITEMS</p>
          {data.map((item) => (
            <>
              <div className="productpage1-column">
                <img src={item.image} width="100%" />
                <strong>{item.title}</strong>
                <p>
                  <strong>{item.text}</strong>
                </p>
                <p>{item.price}</p>
                <div className="productpage1-buttons">
                  <button>EN M/ US M</button>
                  <button>ADD</button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage1
