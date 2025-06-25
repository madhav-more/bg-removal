import React from 'react'
import { assets } from '../assets/assets'

const LastBtn = () => {
  return (
    <div className='mt-20 '>
       <h1 className="text-center text-2xl md:text-2xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent leading-snug">
      See the magic. Try now
      </h1>

      <div className=' flex items-center mt-7'>
        <input type="file" id='upload1' hidden/>
        <label className='inline-flex gap-2 px-5 py-2 h-[40px] rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition
         duration-700' htmlFor="upload1">
          <img src={assets.upload_btn_icon} alt="" width={17} />
          <p className='text-white text-sm '>Upload your image</p>
        </label>
      </div>
    
      
    </div>
  )
}

export default LastBtn
