import React from 'react'
import './mainpage.css'
import image from '../Json/image.json'

const Mainpage = () => {
  



  return (
    <>
    <nav>
        <input type="text" placeholder='Search for dishes...' />
        <button>Cart</button>
    </nav>
    <div className="anchor">
      <a href="">All</a>
      <a href="">Popular</a>
      <a href="">%Offer</a>
      <a href="">Mexican</a>
      <a href="">Burger</a>
      <a href="">Pizza</a>
      <a href="">BBQ</a>
      <a href="">Chicken</a>
      <a href="">Asian</a>
      <a href="">Italian</a>
      <a href="">Healthy</a>
      <a href="">Desert</a>
    </div>
    <div className="mainheroo">
      <h2>All Item</h2>
      <p>15 Item Avalaible</p>
      <div className="menucard">
      {image.map((item)=>(
       <div className="rowone">
        <div className="itemone">
          <img src={item.image} alt="mexican" />
          <p>{item.name}</p>
          <p>Three authentic Mexican tacos with your choice of <br /> carne asada, chicken, or carnitas</p>
          <span>$22</span><mark>$30</mark> <br />
          <span><button>+Add</button></span>

        </div>
        </div>
      
      )
      )}
      </div>
    
    </div>



    </>
  )
}

export default Mainpage