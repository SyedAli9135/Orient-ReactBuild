import React from 'react'
import Navbar from './Navbar'
import Header1 from './Header1'
import Footer from './Footer'
import { useHistory } from 'react-router-dom';
import './ProductPage2.css'
const ProductPage2 = () => {
  const history = useHistory()
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

  const handleClick = (id) => {
    history.push(`/productcheckout/${id}`)
  }

  return (
    <>
      <div>
        <Navbar />
        <Header1 />
        <div id="productpage2-row-wrapper" class="productpage2-row">
          <div className="productpage2-myclass">
            {data && data.length
              ? data.map((item) =>
                  data.indexOf(item) === 2 ||
                  (data.indexOf(item) > 2 &&
                    (data.indexOf(item) + 1) % 3 === 0) ? (
                    <div  className="productpage2-myclass2">
                      <img onClick={()=>handleClick(item.id)} class="card img-top" src={item.image} alt="" />
                      <div class="card-body">
                        <h5 class="card-title">
                          <strong>{item.title}</strong>
                        </h5>
                        <p class="card-text">
                          <strong>{item.text}</strong>
                        </p>
                        <p class="card-text">
                          <small class="text-muted">{item.price}</small>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div id="card-child" class="card border-0">
                      <img
                        onClick={()=>handleClick(item.id)}
                        id="img-width"
                        width="550px"
                        class="card img-top"
                        src={item.image}
                        alt=""
                      />
                      <div id="productpage1-content" class="card-body">
                        <h5 class="card-title">
                          <strong>{item.title}</strong>
                        </h5>
                        <p class="card-text">
                          <strong>{item.text}</strong>
                        </p>
                        <p class="card-text">
                          <small class="text-muted">{item.price}</small>
                        </p>
                      </div>
                    </div>
                  ),
                )
              : null}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProductPage2
