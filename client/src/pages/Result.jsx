import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='mt-20  md:ml-4 md:mr-6' >


      <div className='grid md:grid-cols-2 sm:grid-cols-3 w-full  bg-amber-100'>
              {/** first colm */}

        <div className=''>
          <img src={assets.image_w_bg} alt="" />

        </div>
        <img src={assets.image_wo_bg} alt="" />
       


        {/** secondcolm */}
        <div>

        </div>

      </div>

    </div>
  )
}

export default Result
