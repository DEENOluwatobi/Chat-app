// import React from 'react'
// import user from "../assets/json/users.json"
// import UnreadedCard from './UnreadedCard'

// const UnreadedChat = () => {
//   const unreaded = user.filter((value) => value.isGroupChat == true)
//   console.log(unreaded);

//   return (
//     <div className='h-full w-full flex flex-col'>
//       <div className='w-full h-16 flex justify-center items-center'>
//         <h1 className='text-line opacity-70'>FILTERED BY UNREAD</h1>
//       </div>

//       <div>
//         {unreaded.map((value) => {
//           return (
//             <UnreadedCard key={value.name} value={value}/>
//           )
//         })}
//       </div>

//       <div className='mt-5 text-center w-[90%] self-center border-t border-slate-700 h-10 items-center flex justify-center'>
//         <h1 className='text-xs text-white '>Your private messages <span className='text-sky-300'>end-to-end encrypted</span></h1>
//       </div>
//     </div>
//   )
// }

// export default UnreadedChat


import React from 'react';
import user from "../assets/json/users.json";
import UnreadedCard from './UnreadedCard';

interface UnreadedChatProps {
  name: string;
  isGroupChat: boolean;
  // Add other properties as needed
}

const UnreadedChat: React.FC<UnreadedChatProps> = () => {
  const unreaded = user.filter((value: any) => value.isGroupChat === true);
  console.log(unreaded);

  return (
    <div className='h-full w-full flex flex-col'>
      <div className='w-full h-16 flex justify-center items-center'>
        <h1 className='text-line opacity-70'>FILTERED BY UNREAD</h1>
      </div>

      <div>
        {unreaded.map((value: any) => {
          return (
            <UnreadedCard key={value.name} value={value} />
          );
        })}
      </div>
      
      <div className='mt-5 text-center w-[90%] self-center border-t border-slate-700 h-10 items-center flex justify-center'>
        <h1 className='text-xs text-white '>Your private messages <span className='text-sky-300'>end-to-end encrypted</span></h1>
      </div>
    </div>
  );
};

export default UnreadedChat;
