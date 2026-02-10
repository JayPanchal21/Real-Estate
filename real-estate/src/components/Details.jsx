

import React from 'react'
import { assets, interiorData } from '../assets/assets'

const Details = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Details'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Interior <span className='underline underline-offset-4 decoration-1 font-light'>Details</span>
      </h1>

      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Explore Interior Design Ideas for Your Home
      </p>

      <div className="flex flex-col items-center gap-14">
        {interiorData.map((interior, index) => (
          <div
            key={index}
            className="w-full max-w-[900px] border shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 bg-white"
          >
            {/* LEFT IMAGE */}
            <div className="md:w-full">
              <img
                className="w-full h-[350px] md:h-[380px] object-cover rounded-xl"
                src={interior.image}
                alt={interior.alt}
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center md:w-1/2 text-left px-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                {interior.name}
              </h2>

              <p className="text-gray-500 mb-2 text-sm">
                {interior.title}
              </p>

              {/* RATING */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: interior.rating }, (_, i) => (
                  <img key={i} src={assets.star_icon} alt="" className="w-5" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {interior.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Details

