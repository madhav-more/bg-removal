import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const {openSignIn} = useClerk()
  const {isSignedIn , user} = useUser()


  return (
   <div className='flex items-center justify-between px-6 md:px-20 py-4 w-full bg-gray-50'>
    
      {/* Left: Logo */}
       <Link to='/'> <img src={assets.logo} alt="logo" className='w-32 sm:w-36' /> </Link>

    {isSignedIn ? <div> 
      <UserButton/>
    </div>
    :
     <button onClick={()=>openSignIn({})} className='flex items-center gap-2 px-6 sm:px-8 py-3 sm:w-40 bg-[#242424] text-white rounded-full hover:bg-black transition'>
        <span className='text-xs font-medium'>Get started</span>
        <img src={assets.arrow_icon} alt="" />
      </button>
    

    
    }

      
    </div>


  )
}

export default Navbar
