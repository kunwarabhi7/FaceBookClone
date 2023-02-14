import Image from 'next/image'
import React from 'react'

const SideBarComponents = ({icon,image ,name, title}) => {
  return (
    <div className='flex w-72 h-8 p-4 '>
        {image && <Image src={image} width={30} height={30} className='rounded-full h-6 w-6 mr-2 ' />}
        <h1 className=''>{name}</h1>
<p className='w-8 h-8 text-blue-500'>{icon}</p>    
        <h1 className='h-5 '>{title}</h1>
    </div>
  )
}

export default SideBarComponents
