import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-40' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            SmartKart is a fashion destination that brings timeless style to life. Our brand celebrates individuality, offering high-quality, 
            trend-forward clothing designed for every moment, making you look and feel your best—today, tomorrow, and forever.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/delivery">Delivery</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>admin@smartkart.in</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ smartkart.in - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
