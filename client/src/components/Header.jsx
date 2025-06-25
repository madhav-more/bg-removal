import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-6 mt-10  md:px-20 md:py-10   lg:px-44 sm:mt-1 '>
      {/** -------left side------ */}
      <div >
        <h1 className='text-4xl md:text-3xl xl:text-5xl font-bold leading-tight '>
           Remove the <br />
         <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span> from <br />
          images for free.
        </h1>
        <p className='my-6 md:my-4  text-[12px] md:text-[9px] text-gray-500' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className='max-sm:hidden' />
Lorem Ipsum has been the industry's standard dummy text ever.</p>
<div>
  <input type="file" id='upload1' hidden/>
  <label className='inline-flex gap-2 px-5 py-2 h-[40px] rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transitio\
   duration-700' htmlFor="upload1">
    <img src={assets.upload_btn_icon} alt="" width={17} />
    <p className='text-white text-sm '>Upload your image</p>
  </label>
</div>

      </div>


     {/** -------right side------ */}
     <div className='w-full  md:w-2xs  max-w-md'>
      <img src={assets.header_img} alt="" />
     </div>


      
    </div>
  )
}

export default Header
