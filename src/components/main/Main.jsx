import React from 'react'
import './Main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import About from '../../pages/about/About'
import Resume from '../../pages/resume/Resume'
import Portfolio from '../../pages/portfolio/Portfolio'
import Contact from '../../pages/contact/Contat'

const Main = () => {
  return (
    <div className='main'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/res' element={<Resume />} />
          <Route path='/port' element={<Portfolio />} />
          <Route path='/cntct' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main
