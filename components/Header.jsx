import {BsFacebook,BsSearch} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {MdOndemandVideo,MdOutlineGroups} from 'react-icons/md'
import {CiShop} from 'react-icons/ci'
import {RiGamepadLine} from 'react-icons/ri'
const Header = () => {
  return (
    <div className='flex justify-between p-4  '>
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
      <div className=' flex justify-evenly'>
        <AiFillHome size={30} className='text-blue-500'/>
        <MdOndemandVideo size={30} className='text-blue-500'/>
        <CiShop size={30} className='text-blue-500'/>
        <MdOutlineGroups size={30} className='text-blue-500 rounded-full border border-blue-500'/>
        <RiGamepadLine size={30} className='text-blue-500'/>
            </div>
      {/* right */}
      <div>Right</div>
    </div>
  )
}

export default Header
