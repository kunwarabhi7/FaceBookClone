import {BsFacebook,BsSearch} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {MdOndemandVideo,MdOutlineGroups} from 'react-icons/md'
import {CiShop} from 'react-icons/ci'
import {RiGamepadLine,RiNotification2Fill} from 'react-icons/ri'
import {CgMenuGridR} from 'react-icons/cg'
import {TbBrandMessenger} from 'react-icons/tb'
import Link from 'next/link'
import Image from 'next/image'
import { useSession , signOut} from 'next-auth/react'



const Header = () => {
  const {data:  session} = useSession()

  return (
    <div className='flex justify-between   p-4 shadow-md shadow-white border-white '>
        {/* left */}
             <div className='flex '>
                <Link href='/'>
                <BsFacebook className='text-blue-500  cursor-pointer  mt-1' size={30}/>
                </Link>
                <form>
<div className='flex bg-[rgb(58,59,60)] h-10 md:w-60 rounded-full p-3 ml-3 mb-2 w-10' >

<BsSearch className='text-gray-500'/>
<input type="text" placeholder='Search Facebook' className='bg-transparent ml-4  py-2 hidden md:block outline-none placeholder-gray-500 ' />
</div>

                </form>
             </div>
             {/* center */}
      <div className='cursor-pointer justify-evenly items-center w-[700px] hidden  sm:flex'>
        <AiFillHome size={30} className='text-blue-500 hover:bg-gray-700 w-12 h-8 hover:h-10  border-b-4 border-blue-500   '/>
        <MdOndemandVideo size={30} className='text-gray-500 hover:bg-gray-700 w-12 hover:h-10'/>
        <CiShop size={30} className='text-gray-500 hover:bg-gray-700 w-12 hover:h-10'/>
        <MdOutlineGroups size={30} className='text-gray-500 rounded-full border border-gray-500 hover:bg-gray-700 w-12 hover:h-10'/>
        <RiGamepadLine size={30} className='text-gray-500 hover:bg-gray-700 w-12 hover:h-10'/>
            </div>
      {/* right */}
      <div className='w-44 flex justify-end'>
        <CgMenuGridR size={40} className='text-white hover:text-blue-500 cursor-pointer rounded-full p-2'/>
        <TbBrandMessenger size={40} className='text-white hover:text-blue-500 cursor-pointer rounded-full p-2'/>
        <RiNotification2Fill size={40} className='text-white p-2 bg-gray-500 hover:text-blue-500 rounded-full cursor-pointer'/>
        <Image onClick={signOut} src={session.user.image} height={20} width={38} className='text-white hover:text-blue-500 bg-gray-500 cursor-pointer rounded-full  ml-1' />
        </div>
    </div>
  )
}

export default Header
