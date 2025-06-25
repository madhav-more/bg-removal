import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    
      <div className='flex items-center justify-around mt-40'>

        <div className='flex gap-6'>
          <img src={assets.logo} alt="" className='w-32 h-10'/>
          <p className='text-xs pl-4 flex-l border-l border-gray-500 mt-3 max-sm:hidden '>Copyright @br-removal.dev | All right reserved.</p>
        </div>
        <div className='flex gap-1 '>
          <img src={assets.facebook_icon} alt=""  width={40}/>
          <img src={assets.twitter_icon} alt=""  width={40}/>
          <img src={assets.google_plus_icon} alt="" width={40} />
        </div>

      </div>
      
  
  )
}

export default Footer
