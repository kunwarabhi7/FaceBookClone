import React from 'react'
import { useSession } from 'next-auth/react'
import {AiFillHome} from 'react-icons/ai'
import Image from 'next/image'

const SideBar = () => {
  const {data:session,loading}  = useSession()
  return (
    <div>
   <div>

   <AiFillHome />
   <h1>Home</h1>
   </div>
   <div>
    <Image height={40} width={40} src={session?.user.image} />
<h2>{session?.user.name}</h2>
   </div>

    </div>
  )
}

export default SideBar
