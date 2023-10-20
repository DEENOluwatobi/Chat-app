import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'

const OptionChatBox = ({option,selectedChat}) => {
  return (
    <AnimatePresence>
      {option && (
        <motion.div
          animate={{
            scale: [0, 1],
            opacity:[0,1]
          }}
          exit={{
            scale: [1, 0],
            opacity:[1,0]
          }}
          transition={{
            duration:0.2
          }}
          className='absolute w-[192px] h-auto bg-primary flex origin-top-right py-1 rounded-md top-14 right-5'>
     {selectedChat.isGroupChat ? 
            (
              <ul className='w-full text-white'>
                <li className='py-2 hover:bg-secondary px-4'>Group info</li>
                <li className='py-2 hover:bg-secondary px-4'>Select message</li>
                <li className='py-2 hover:bg-secondary px-4'>Mute notifications</li>
                <li className='py-2 hover:bg-secondary px-4'>Clear messages</li>
                <li className='py-2 hover:bg-secondary px-4'>Exit group</li>
              </ul>
            )
            : (
              <ul className='w-full text-white'>
                <li className='py-2 hover:bg-secondary px-4'>Contact info</li>
                <li className='py-2 hover:bg-secondary px-4'>Select message</li>
                <li className='py-2 hover:bg-secondary px-4'>Close chat</li>
                <li className='py-2 hover:bg-secondary px-4'>Mute notifications</li>
                <li className='py-2 hover:bg-secondary px-4'>Clear messages</li>
                <li className='py-2 hover:bg-secondary px-4'>Delete chat</li>
              </ul>
            )
          }
      </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OptionChatBox