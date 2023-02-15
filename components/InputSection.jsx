import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {TiVideo} from 'react-icons/ti'
import {IoImages} from 'react-icons/io5'
import {GoSmiley} from 'react-icons/go'

const InputSection = () => {
    const {data:session} = useSession()

    const SubmitPost=(e) =>{
e.preventDefault()
    }

  return (
    <div className='w-96 h-25 mt-8 ml-4 shadow-md '>
        <div className='flex'>
        <Image src={session?.user.image} height={20} width={38} className='text-white hover:text-blue-500 bg-gray-500 cursor-pointer rounded-full  ml-1' />
<form>

<input placeholder= {`What's on your mind , ${session.user.name} `} className='p-2 w-[500px] h-10 rounded-full ml-3' />
<button onClick={SubmitPost} className='hidden'>Submit</button>
</form>
        </div>
        <hr className='my-4 w-[550px]' />
<div className='h-10 w-[558px] flex justify-evenly'>
    <div className='flex items-center '>

    <TiVideo size={25} className='text-red-500 mr-2'/>
    <h1 >Live Video</h1>
    </div>
    <div className='flex items-center'>

    <IoImages size={25} className='text-green-500' />
    <h1>Photo/video</h1>
    </div>
    <div className='flex items-center'>

    <GoSmiley size={25} className='text-yellow-400' />
    <h1>Feeling/activity</h1>
    </div>
</div>
      
    </div>
  )
}

export default InputSection
