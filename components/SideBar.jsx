import React from 'react'
import { useSession } from 'next-auth/react'
import {AiFillHome} from 'react-icons/ai'
import SideBarComponents from './SideBarComponents'

const SideBar = () => {
  const {data:session,loading}  = useSession()
  return (
    <div className='p-2'>

<SideBarComponents icon={<AiFillHome size={20}/>} title='Home' />
<SideBarComponents image={session.user.image}  name={session.user.name}/>  
<SideBarComponents icon={<AiFillHome />} title='Home' />
<SideBarComponents icon={<AiFillHome />} title='Home' />
<SideBarComponents icon={<AiFillHome />} title='Home' />
<SideBarComponents icon={<AiFillHome />} title='Home' />

 
 
   </div>
  )
}

export default SideBar
