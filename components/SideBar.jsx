import React from 'react'
import { useSession } from 'next-auth/react'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineOndemandVideo} from 'react-icons/md'
import {FaUserFriends} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'
import {SiHomeassistantcommunitystore , SiFacebookgaming} from 'react-icons/si'
import SideBarComponents from './SideBarComponents'

const SideBar = () => {
  const {data:session,loading}  = useSession()
  return (
    <div className='p-2 w-20 md:w-72 h-screen'>

<SideBarComponents icon={<AiFillHome size={20}/>} title='Home' />
<SideBarComponents image={session.user.image}  name={session.user.name}/>  
<hr className='border-1 border-gray-700 mt-4 w-12 md:w-36' />
<SideBarComponents  icon={<MdOutlineOndemandVideo size={20} />} title='Watch' />
<SideBarComponents icon={<FaUserFriends size={20}/>} title='Friends' />
<SideBarComponents icon={<SiHomeassistantcommunitystore />} title='MarketPlace' />
<SideBarComponents icon={<SiFacebookgaming />} title='Gaming' />
<h1 className='flex w-72 h-8 p-2'>
<CgMenuGridO className='w-8 h-8 text-gray-500 ' size={20} />
<h2 className='h-5 hidden md:flex ml-2 mt-1 '>See All</h2>
</h1>
<hr className='border-1 border-gray-700 mt-4 w-12 md:w-36' />

 
   </div>
  )
}

export default SideBar
