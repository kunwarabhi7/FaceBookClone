import {BsFacebook,BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='flex justify-between p-4  '>
        {/* left */}
             <div className='flex'>
                <BsFacebook className='text-blue-500   mt-1' size={30}/>
                <form>
<div className='flex bg-[rgb(58,59,60)] h-10 md:w-60 rounded-full p-3 ml-3 mb-2 w-10' >

<BsSearch />
<input type="text" placeholder='Search Facebook' className='bg-transparent ml-4  py-2 hidden md:block outline-none placeholder-gray-500 ' />
</div>

                </form>
             </div>
             {/* center */}
      <div>Center</div>
      {/* right */}
      <div>Right</div>
    </div>
  )
}

export default Header
