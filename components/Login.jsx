import React from 'react'
import {FaFacebook} from 'react-icons/fa' 
import { signIn, useSession } from 'next-auth/react'

const Login = () => {
  const {data:session} = useSession()

  return (
    <div className='grid place-items-center py-16'>
      <FaFacebook size={300} className='text-blue-500'/>
      <button onClick={signIn} className='bg-blue-500 text-white text-xl font-bold my-16 text-center rounded-full p-12'>Login With Facebook</button>
    </div>
  )
}

export default Login
