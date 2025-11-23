import React from 'react'

import Home from './home/Home.jsx';

import Courses from './courses/Courses.jsx';

import "slick-carousel/slick/slick.css";
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
    </Routes>
    </>
  )
}

export default App
