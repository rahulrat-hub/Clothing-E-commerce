import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Collection from './pages/Collection'
import About from './pages/About'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import SizeChart from './components/SizeChart'
import SingleProduct from './pages/SingleProduct'


function App() {
  return (
    <div className='min-h-screen'>
    <BrowserRouter>
    <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Collection' element={<Collection />} />
    <Route path='/About' element={<About />} />
    <Route path='/Login' element={<Login />} /> 
    <Route path='/Cart' element={<Cart />} />
     <Route path='/Contact' element={<Contact />} />
      <Route path='/SizeChart' element={<SizeChart />} />
    <Route path='/product/:pid' element={<SingleProduct />} />
  </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App