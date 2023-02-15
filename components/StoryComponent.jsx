import React from 'react'

const StoryComponent = ({name ,profile,src}) => {
  return (
    <div class="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
            <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src={profile} alt="Profile Pic" />

            <div class="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                <img class="w-full h-full object-cover" src={src} alt="story Image" />
            </div>

            <div class="absolute inset-x-3 bottom-1">
                <p class="text-white font-semibold">{name}</p>
            </div>

            <div class="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

        </div>
  )
}

export default StoryComponent
