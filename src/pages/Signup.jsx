import React from 'react'
import Footer from '../components/UI/Footer/Footer'

const Signup = () => {
  return (
    <>
    <div className='flex-col text-center mx-[4%] mt-20 p-10  rounded bg-gradient-to-r from-blue-300 via-blue-5=800 to-blue-500 sm:mt-8 sm:mx-[30%]'>
      <h2 className='text-2xl text-white font-serif logo'>Sign up</h2>
        <p className='text-[10px] font-thin text-white mt-1'>sign up now to buy new furniture</p>
      <div className=' flex-col items-center justify-center text-center'>
        <div><input type="text" placeholder='email' className='border-2 mt-7 px-3 py-1 rounded text-[12px] font-thin outline-none' /></div>
        <div><input type = "password" placeholder='password' className='border-2 m-4 px-3 py-1 rounded text-[12px] font-thin outline-none'/></div>
        <div><button className='bg-black   rounded-sm text-white px-3 py-1 mt-1 text-[10px]' autofill="false ">Create account</button></div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup