import React from 'react'
import {MdOutlineAutoStories} from 'react-icons/md'
import {TfiInstagram} from 'react-icons/tfi'
import StoryComponent from './StoryComponent'

const stories = [
  {
    name: "Abhishek Singh",
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    profile: "https://images.unsplash.com/photo-1626301688449-1fa324d15bca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Elon Musk",
    src: "https://images.unsplash.com/photo-1621932971080-4f3c83c1c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
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
    <div className='w-48 md:w-[590px]  bg-[rgb(36,37,38)] md:ml-32 ml-16 mt-6'>
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
      <div className='flex p-2 '>
{stories.map((story)=>{
 return (

   <StoryComponent key={story.id} name={story.name} profile={story.profile} src={story.src} />
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
