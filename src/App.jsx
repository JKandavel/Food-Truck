import React from 'react'
import Landingpage from './Landingpage/Landingpage.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Mainpage  from './mainpage/mainpage.jsx';
import Cart from './cart/Cart.jsx';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='main' element={<Mainpage/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;