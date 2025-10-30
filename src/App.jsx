import React from 'react'
import Landingpage from './Landingpage/Landingpage.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Mainpage  from './mainpage/mainpage.jsx';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='main' element={<Mainpage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;