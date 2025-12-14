import React, { useState } from 'react'
import food from '../image/food.png';
import cardy from '../image/cart.jpg';
import { Link, useNavigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';

function Navbar() {

  const [quality,setQuality] = useState(0)

  const navigate = useNavigate();
  const allcard = () => {
    navigate('/card')
  }

  return (
    <div className='w-full h-[90px] bg-black bg-opacity-80 flex items-center justify-between px-10 fixed top-0 left-0 z-50'>
      
      <div className='flex items-center gap-2'>
        <img src={food} className='h-[60px]' alt="logo" />
      </div>

      <div className='flex items-center w-[40%]'>
        <input 
          type='text' 
          placeholder='Search for dishes...'
          className='w-full h-[50px] rounded-l-3xl px-5 outline-none bg-white text-black'
        />
        <button className='bg-orange-600 text-white px-6 h-[50px] rounded-r-3xl text-lg font-semibold hover:bg-orange-700'>
          Search
        </button>
      </div>

      <div className='relative'>
        <button 
          onClick={allcard} 
          className='bg-green-800 w-[60px] h-[60px] rounded-full flex items-center justify-center'
        >
          <img src={cardy} className='w-[30px]' />
        </button>

        <span className='absolute -top-1 -right-1 bg-orange-600 text-white w-[25px] h-[25px] rounded-full flex items-center justify-center text-sm font-bold'>
          {quality}
        </span>
      </div>

      <div className='flex gap-5'>

        <Link 
          to={'/home'} 
          className='bg-green-800 text-white px-6 py-2 rounded-full text-lg hover:bg-green-900'
        >
          Home
        </Link>

        <Link 
          to={'/profile'} 
          className='bg-green-800 text-white px-6 py-2 rounded-full text-lg hover:bg-green-900'
        >
          Profile
        </Link>

        <Link 
          to={'/login'} 
          className='bg-green-800 text-white px-6 py-2 rounded-full text-lg hover:bg-green-900'
        >
          Log out
        </Link>

      </div>
    </div>
  )
}

export default Navbar;
