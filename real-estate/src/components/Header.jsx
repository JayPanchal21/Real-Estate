import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className=' relative min-h-screen mb-4 flex bg-cover bg-center items-center w-full overflow-hidden ' style={{backgroundImage: "url('/header_img.png ')"}} id='Header '>

      <div className="absolute inset-0 bg-black/50"></div>

      <Navbar/>

      <div className=' relative container text-center mx-auto py- 4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-white'>
            Explore the Houses that fit your dreams 
        </h2>
        <div className=' space-x-6  mt-16'>
            <a href="#Properties" className=' border border-white py-3 px-8 rounded'>Properties</a>
            <a href="#Contact" className=' border border-white bg-blue-500 py-3 px-8 rounded'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
