import {BsFacebook,BsSearch} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {MdOndemandVideo,MdOutlineGroups} from 'react-icons/md'
import {CiShop} from 'react-icons/ci'
import {RiGamepadLine,RiNotification2Fill} from 'react-icons/ri'
import {CgMenuGridR} from 'react-icons/cg'
import {TbBrandMessenger} from 'react-icons/tb'
import {RxAvatar} from 'react-icons/rx'



const Header = () => {
  return (
    <div className='flex justify-between p-4 border border-x-0 border-t-0 border-white '>
        {/* left */}
             <div className='flex'>
                <BsFacebook className='text-blue-500   mt-1' size={30}/>
                <form>
<div className='flex bg-[rgb(58,59,60)] h-10 md:w-60 rounded-full p-3 ml-3 mb-2 w-10' >

<BsSearch className='text-gray-500'/>
<input type="text" placeholder='Search Facebook' className='bg-transparent ml-4  py-2 hidden md:block outline-none placeholder-gray-500 ' />
</div>

                </form>
             </div>
             {/* center */}
      <div className='  justify-evenly w-[700px] hidden  sm:flex'>
        <AiFillHome size={30} className='text-blue-500'/>
        <MdOndemandVideo size={30} className='text-blue-500'/>
        <CiShop size={30} className='text-blue-500'/>
        <MdOutlineGroups size={30} className='text-blue-500 rounded-full border border-blue-500'/>
        <RiGamepadLine size={30} className='text-blue-500'/>
            </div>
      {/* right */}
      <div className='w-44 flex justify-evenly'>
        <CgMenuGridR size={40} className='text-white hover:text-blue-500 cursor-pointer rounded-full p-2'/>
        <TbBrandMessenger size={40} className='text-white hover:text-blue-500 cursor-pointer rounded-full p-2'/>
        <RiNotification2Fill size={40} className='text-white p-2 bg-gray-500 hover:text-blue-500 rounded-full cursor-pointer'/>
        <RxAvatar size={40} className='text-white hover:text-blue-500 bg-gray-500 cursor-pointer rounded-full p-2' />
        </div>
    </div>
  )
}

export default Header
