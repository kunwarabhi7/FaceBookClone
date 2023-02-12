import React from 'react'
import {FaFacebook} from 'react-icons/fa' 
const Login = () => {
  return (
    <div className='grid place-items-center py-16'>
      <FaFacebook size={300} className='text-blue-500'/>
      <button className='bg-blue-500 text-white text-xl font-bold my-16 text-center rounded-full p-12'>Login With Facebook</button>
    </div>
  )
}

export default Login
