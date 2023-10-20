import React from 'react'
import hero from "../assets/img/hero.png"

const HeroBg = () => {
  return (
    <div className='bg-hero h-full w-[70%] flex flex-col'>
      <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
        <span className='text-white text-[3em] font-bold'>
            Chat App
        </span>
        <p className='text-line text-[1em]'>Click on any chat to begin</p>
        <p className='text-white'>Chats are end-to-end encrypted</p>
      </div>
      <span className='w-full h-[6px] bg-line block mt-auto'></span>
    </div>
  )
}

export default HeroBg