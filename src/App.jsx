import React from 'react'

import Home from './home/Home.jsx';

import Courses from './courses/Courses.jsx';
import Contact from './components/Contact.jsx';


import "slick-carousel/slick/slick.css";
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import Signup from './components/Signup.jsx';

const App = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
       <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
