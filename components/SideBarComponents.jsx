import Image from 'next/image'
import React from 'react'

const SideBarComponents = ({icon,image , title}) => {
  return (
    <div className='flex'>
        {image && <Image src={image} width={30} height={30} className='rounded-full' />}
<p>{icon}</p>    
        <h1>{title}</h1>
    </div>
  )
}

export default SideBarComponents
