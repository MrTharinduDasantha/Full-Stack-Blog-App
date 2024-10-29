import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} width={120} alt='Logo Light' />
        <p className='text-sm text-white'>© 2024 - Full Stack Blog Website - All rights reserved</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} width={40} alt='Facebook Icon' />
            <Image src={assets.twitter_icon} width={40} alt='Twitter Icon' />
            <Image src={assets.googleplus_icon} width={40} alt='Google Plus Icon' />
        </div>
    </div>
  )
}

export default Footer