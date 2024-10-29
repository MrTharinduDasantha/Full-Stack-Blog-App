import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Header = () => {
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('email', email)
    const response = await axios.post('/api/email', formData)
    if (response.data.success) {
      toast.success(response.data.message)
      setEmail('')
    } else {
      toast.error('Error Occured')
    }
  }
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} className='w-[130px] sm:w-auto' alt='Logo' />
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='Arrow' /></button>
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Check out our latest blogs and tutorials on web development, programming, and more. We regularly update our blog with new content and tutorials.</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='pl-4 outline-none' placeholder='Enter your email' />
            <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header