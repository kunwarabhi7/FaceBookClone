import React from 'react'

const StoryComponent = ({name ,profile,src , key}) => {
  return (
    <div key={key} className="w-36 h-52 p-1  rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
            <img className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out transform group-hover:scale-105" src={src} alt="Story Pic" />

            <div className="w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3">
                <img className="w-full h-full object-cover" src={profile} alt="Profile Image" />
            </div>

            <div className="absolute inset-x-3 bottom-1">
                <p className="text-white font-semibold">{name}</p>
            </div>

            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>

        </div>
  )
}

export default StoryComponent
