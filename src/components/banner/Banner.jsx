import React from 'react'
import { FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Banner.css"

const Banner = () => {
  return (
    <section className='banner-container w-full'>
      <div className='container mx-auto px-2 pt-4 md:pt-0 flex flex-col items-center justify-center h-full w-full'>
        <h1 className='text-[36px] md:text-[56px] font-bold text-white text-center'>Are You a Supplier?</h1>
        <h1 className='text-[36px] md:text-[56px] text-white text-center'>Explore Matching Oppurtunities.</h1>
        <div className='flex flex-col md:flex-row items-center justifufy-center space-y-4 md:space-x-4 md:space-y-0 mt-4'>
          <div className='flex items-center bg-white p-2 w-[300px] h-[40px] md:w-[350] md:h-[54px] lg:w-[400px] rounded'>
            <FaBriefcase className='text-orange-600' />
            <input className='h-full w-full outline-none p-2 text-gray-600 text-[16px]' placeholder='Search your required service here' />
          </div>
          <div className='flex items-center bg-white p-2 w-[300px] h-[40px]  md:w-[350] md:h-[54px] lg:w-[400px] rounded'>
            <FaLocationDot className='text-orange-600' />
            <input className='h-full w-full outline-none p-2 text-gray-600 text-[16px]' placeholder='Search your desired location here' />
          </div>
          <button className='w-[80px] h-[40px] md:w-[100px] md:h-[54px] bg-green-600 rounded text-[16px] text-white'>Search</button>
        </div>
        <p className='mt-4 text-white font-bold text-center'>Are you a buyer? <span className='font-normal underline'><a href='/'>Click here if you are looking to post your requirements</a></span></p>
      </div>
    </section>
  )
}

export default Banner