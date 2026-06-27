import React from 'react'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import Footer from '../components/Footer'



function Home() {
  return (
    <div>
   <Hero />
   <Trending />
  <BestSeller />
   <Policy />
   <Footer />
   </div>
  )
}

export default Home