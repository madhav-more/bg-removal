import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className="mx-4 md:mx-12 xl:mx-32 py-16">
      <h1 className="text-center text-2xl md:text-2xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent leading-snug">
        Steps to remove background <br />
        image in seconds
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-14 xl:mt-20 place-items-center">
        {/* Step 1 */}
        <div className="flex items-start md:h-20 w-60 gap-1 md:ml-39 bg-white border border-gray-200 shadow-md p-5 rounded-lg hover:scale-[1.02] transition-transform duration-300 max-w-lg">
          <div className="h-7 w-7 rounded-[10px] bg-gradient-to-r from-purple-400 to-violet-600 flex items-center justify-center">
            <img src={assets.upload_icon} alt="Upload" className="h-3 w-3" />
          </div>
          <div>
            <p className="text-sm font-bold text-black">Upload image</p>
            <p className="text-[8px] text-gray-500 mt-1 leading-relaxed">
              This is a demo text, will replace it later. <br />
              This is a demo..
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start md:h-20 w-60 gap-1 md:mr-20 bg-white border border-gray-200 shadow-md p-5 rounded-lg hover:scale-[1.02] transition-transform duration-300 max-w-lg">
          <div className="h-8 w-8 rounded-[10px] bg-gradient-to-r from-purple-400 to-violet-600 flex items-center justify-center">
            <img src={assets.remove_bg_icon} alt="Remove" className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-black">Remove background</p>
            <p className="text-[8px] text-gray-500 mt-1 leading-relaxed">
              This is a demo text, will replace it later. <br />
              This is a demo..
            </p>
          </div>
        </div>

        {/* Step 3 - centered */}
        <div className="flex items-start md:h-20 w-60 gap-4 bg-white border border-gray-200 shadow-md p-5 rounded-lg hover:scale-[1.02] transition-transform duration-300  max-w-lg md:col-span-2">
          <div className="h-8 w-8 rounded-[10px] bg-gradient-to-r from-purple-400 to-violet-600 flex items-center justify-center">
            <img src={assets.download_icon} alt="Download" className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-black">Download image</p>
            <p className="text-[8px] text-gray-500 mt-1 leading-relaxed">
              This is a demo text, will replace it later. <br />
              
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
