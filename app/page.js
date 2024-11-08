import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Guards from './components/Guards/Guards'
import Contact from './components/Contact/Contact'

const page = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Services/>
      <Guards/>
      <Contact/>
    </div>
  )
}

export default page
