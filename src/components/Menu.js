import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'

const Menu = ({ menu, x, y, setX, setY, setMenu ,selectedChat}) => {
  document.addEventListener("click", (e) => {
    if (e.target !== document.getElementById("menu")) {
      setMenu(false)
    }
  })
    if (y >= 300) {
      setY(300)
    } if (x >= 750) {
      setX(750)
    }

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          id='menu'
          animate={{
            scale: [0, 1],
            opacity:[0,1],
            transition: {
              delay: 0,
              duration:0.2
            }
          }}
          exit={{
            scale: [1, 0],
            transition: {
              delay: 0,
              duration:0.2
            }
          }}
          style={{
            x: x,
            y:y
          }}
          className={`absolute w-[192px] h-auto bg-primary flex ${y>= 380? "origin-bottom-left":"origin-top-left"} py-1 rounded-md`}
        >
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

export default Menu