import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'


const InputSection = () => {
    const {data:session} = useSession()
  return (
    <div>
        <div>
        <Image src={session?.user.image} height={20} width={38} className='text-white hover:text-blue-500 bg-gray-500 cursor-pointer rounded-full  ml-1' />

        </div>
      
    </div>
  )
}

export default InputSection
