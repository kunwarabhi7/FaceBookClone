import {BsFacebook,BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='flex justify-between p-4'>
        {/* left */}
             <div className='flex'>
                <BsFacebook className='text-blue-500' size={30}/>
                <form>
<div className='flex'>

<BsSearch />
<input type="text" placeholder='Search Facebook' />
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
