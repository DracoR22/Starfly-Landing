import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Stories } from './Components/Stories'
import Newsletter from './Components/Newsletter'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <Stories/>
    <Newsletter/>
    <Cards/>
    <Footer/>
  </React.StrictMode>
)
