import React from 'react'
import {MdOutlineAutoStories} from 'react-icons/md'
const Feed = () => {
  return (
    <div className='w-[590px]'>
      <div className='flex h-18 '>
        <div className='flex w-70 cursor pointer'>
        <MdOutlineAutoStories size={40} className='text-blue-500' />
        <h1>Stories</h1>
        </div>
        <div className='flex w-70'>
        <MdOutlineAutoStories size={40} className='text-blue-500' />
        <h1>Reels</h1>
        </div>
      </div>
      <div>Story</div>
      <div>Input section</div>
      <div>Feed Section</div>
    </div>
  )
}

export default Feed
