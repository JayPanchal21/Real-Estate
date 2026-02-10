import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact
        <span className='underline underline-offset-4 decoration-1 font-light'> With Us</span>
      </h1>

      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className="flex flex-wrap md:flex-nowrap gap-6">

          <div className="w-full md:w-1/2">
            <label className="text-left block mb-2 font-medium">Your Name</label>
            <input
              className="border border-gray-400 w-full rounded py-3 px-4"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
            <label className="text-left block mb-2 font-medium">Your Email</label>
            <input
              className="border border-gray-400 w-full rounded py-3 px-4"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>

        </div>

      </form>
    </div>
  )
}

export default Contact
