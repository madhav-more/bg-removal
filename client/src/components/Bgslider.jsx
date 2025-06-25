import React, { useState } from 'react'

const Bgslider = () => {
  const [sliderPosition , setSliderPosition] = useState(50)

  const handleSliderchange = (e)=>{
    setSliderPosition(e.target.value)
  }
  

  return (
    <div>
       {/** title */}
       <h1 className="text-center text-2xl md:text-2xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent leading-snug">
       Remove Background With High <br />
Quality and Accuracy
      </h1>

      {/** slider */}

      <div>
        {/** backgroubd image */}
        

        
      </div>



      
    </div>
  )
}

export default Bgslider
