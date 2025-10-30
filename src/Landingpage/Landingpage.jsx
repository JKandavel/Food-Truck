import React from 'react'
import '../Landingpage/Landingpage.css'
import star from '../Landingpage/images/star.png'
import time from'../Landingpage/images/time.png'
import bar from'../Landingpage/images/bar.png'
import truck from'../Landingpage/images/truck.png'
import burger from '../Landingpage/images/burger.png'
import pizza from'../Landingpage/images/pizza.png'
import salad from'../Landingpage/images/salad.png'
import noodles from '../Landingpage/images/noodles.png'
import selfservice from '../Landingpage/images/room-service.png'
import badge from '../Landingpage/images/badge.png'
import speaker from '../Landingpage/images/speaker.png'
import foodphotoo from '../assets/fried.png'
import bbq from '../assets/bbq.jpg' 
import {useNavigate} from 'react-router-dom'
const Landingpage = () => {
 const navigate=useNavigate(); 

  const main=()=>{
    navigate("/main")
  }
  return (
   <>
   <div className="main">
   <header>
    <nav className='nav'>
      <div className="left">
        <img src={truck} alt="truck" />
      <a href="#"> <span className='spanone'>Wheely</span><br /><span className='spantwo'>Kitchen</span></a>
      </div>
      <div className="right">
        <a href="#">Available</a>
      </div>
    </nav>
   </header>
   <main>
    <div className="hero-1">
        <div className="lefthero">
      <a href="#">Self-Service</a>
        <span>Order Your</span>
        <span>Favourite</span>
        <span className='span-three'>Food Now</span>
        <p>Fresh, delicious meals from food trucks. Order<br/> here → Get token → Collect when ready!</p>
        <button onClick={main}>Start Ordering &#8594;</button>
        <div className="heroicon">
        <div className="star">
          <img src={star} alt="star" /><span> 4.8</span>
          <p>Rating</p>
        </div>
         <div className="star">
          <img src={time} alt="time" /><span> 15min</span>
          <p>Avg.Time</p>
        </div>
         <div className="star">
          <img src={bar} alt="bar" /><span> 50+</span>
          <p>Menu items</p>
        </div>
        </div>
    </div>
    <div className="righthero">
      <img src={bbq} alt="food" />
    </div>
    </div>
   </main>
   <section>
    <h1>Why Choose Us?</h1>
    <p>Fast,fresh and always delicious</p>
     <div className="pre-menu1">
      <div className="one1">
        <img src={selfservice} alt="burger" />
        <h2>Self-Service</h2>
        <p>Order via Wheely Kitchen, get a token number, and collect your food when called. No waiting in line!</p>
      </div>
      <div className="one1">
         <img src={badge} alt="pizza" />
        <h2>Top-Quality</h2>
        <p>Curated selection from the best food vendors. Fresh ingredients, amazing taste.</p>
      </div>
        
        <div className="one1">
        <img src={speaker}alt="burger" />
        <h2>Token System</h2>
        <p>Get your unique token number. Listen for your number when your order is ready for pickup!

</p>
      </div>
    </div>





    <h1>Whats Your Cravings?</h1>
    <p>Explore our delicious menu</p>
    <div className="pre-menu">
      <div className="firstt">
      <div className="burger">
        <img src={burger} alt="burger" />
        <p>Burger</p>
      </div>
      <div className="burger">
         <img src={pizza} alt="pizza" />
        <p>Pizza</p>
      </div>
      </div>
      <div className="twooo">
        <div className="burger">
        <img src={noodles} alt="burger" />
         <p>Noodles</p>
      </div>
        <div className="burger">
        <img src={salad} alt="burger" />
        <p>Salad</p>
      </div>
      
      </div>
    </div>
    <button>View Full Menu</button>
   </section>


   <footer>
    <h1>Ready to Order?</h1>
    <p>Touch the screen to start exploring our menu and place your order</p>
    <button>Browse Menu</button> 




   </footer>
   </div>
   </>
  )
}

export default Landingpage