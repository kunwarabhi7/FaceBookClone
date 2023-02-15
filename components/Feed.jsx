import React from 'react'
import {MdOutlineAutoStories} from 'react-icons/md'
import {TfiInstagram} from 'react-icons/tfi'
const Feed = () => {
  return (
    <div className='w-[590px] bg-[rgb(36,37,38)] ml-32 mt-6'>
      {/* Top Section */}
      <div className='flex h-18 justify-evenly p-8'>
        <div className='flex w-70  border-b-2 border-blue-500'>
        <MdOutlineAutoStories size={40} className='text-blue-500 w-36' />
        <h1>Stories</h1>
        </div>
        <div className='flex w-70 text-gray-400 ml-16'>
        <TfiInstagram size={40} className='w-16' />
        <h1>Reels</h1>
        </div>
      </div>
      {/* Stories */}
      <div>Story</div>
      {/* Input section */}
      <div>Input section</div>
      {/* Main Section */}
      <div>Feed Section</div>
    </div>
  )
}

export default Feed
