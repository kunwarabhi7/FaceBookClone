import React from 'react'
import {MdOutlineAutoStories} from 'react-icons/md'
import {TfiInstagram} from 'react-icons/tfi'
import StoryComponent from './StoryComponent'

const stories = [
  {
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

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
      <div className='flex'>
{stories.map((story)=>{
 return (

   <StoryComponent name={story.name} profile={story.profile} src={story.src} />
 ) 
})}
      </div>
      {/* Input section */}
      <div>Input section</div>
      {/* Main Section */}
      <div>Feed Section</div>
    </div>
  )
}

export default Feed
