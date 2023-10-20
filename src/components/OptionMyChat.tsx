import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptionMyChatProps {
  option: boolean;
}

const OptionMyChat: React.FC<OptionMyChatProps> = ({ option }) => {
  return (
    <AnimatePresence>
      {option && (
        <motion.div
          animate={{ scale: [0, 1] }}
          transition={{ duration: 0.3 }}
          exit={{ scale: 0 }}
          className='absolute w-[197px] h-[176px] flex bg-primary top-[40px] shadow-sm rounded-md shadow-slate-700 right-4 py-1 origin-top-right'
        >
          <ul className='text-white w-full'>
            <li className='py-2 hover:bg-secondary px-4'>New Group</li>
            <li className='py-2 hover:bg-secondary px-4'>Starred Messages</li>
            <li className='py-2 hover:bg-secondary px-4'>Settings</li>
            <li className='py-2 hover:bg-secondary px-4'>Logout</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OptionMyChat;
