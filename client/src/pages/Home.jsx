import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Bgslider from '../components/Bgslider'
import Testimonials from '../components/Testimonials.jsx'
import LastBtn from '../components/LastBtn.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Bgslider/>
     <Testimonials/>
     <LastBtn/>
      
    </div>
  )
}

export default Home
