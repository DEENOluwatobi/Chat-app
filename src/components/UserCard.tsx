import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface UserCardProps {
  value: {
    lstTime: string;
    lstmsg: string;
    pic: string;
    name: string;
    isGroupChat: boolean;
  };
  setChatBox: (isOpen: boolean) => void;
  setSelectedChat: (selectedChat: any) => void; 
}

const UserCard: React.FC<UserCardProps> = ({ value, setChatBox, setSelectedChat }) => {
  const [user] = useState(value);
  const [isGroup, SetIsGroup] = useState(value.isGroupChat);

  function readed() {
    SetIsGroup(false);
    console.log(user.isGroupChat);
    setChatBox(true);
    setSelectedChat(value);
  }

  return (
    <div className="h-[65px] w-full hover:bg-primary pl-4 flex items-center justify-between transition-all ease-in-out duration-100 cursor-pointer" onClick={readed}>
      <div className="w-[50px] rounded-full overflow-hidden h-[50px] flex items-center justify-center">
        <img src={user.pic} alt="" />
      </div>

      <div className="h-full w-[80%] py-3 border-b-[1px] border-slate-700 border-wid mr-3 hover:border-0 flex justify-between group">
        <div>
          <h1 className="capitalize text-white">{user.name}</h1>
          <p className={`${isGroup ? "text-white" : "text-slate-500"} text-sm`}>
            {user.lstmsg}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className={isGroup ? "text-line text-xs font-medium" : "text-slate-700 font-medium text-xs"}>
            {user.lstTime}
          </p>
          <div className="flex w-full">
            {isGroup ? (
              <div className="w-[20px] h-[20px] bg-line rounded-full flex items-center justify-center">
                <p>1</p>
              </div>
            ) : (
              ""
            )}
            <MdKeyboardArrowDown className="absolute group-hover:ml-1  group-hover:static text-icon text-2xl scale-0 group-hover:scale-100 transition-all ease-in-out duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;


// import React, { useState } from "react";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { fetchUserData, User } from "../data/userData"; // Import the fetchUserData function and User type from useData

// interface UserCardProps {
//   value: User; // Adjust the type to User from the imported type
//   setChatBox: (isOpen: boolean) => void;
//   setSelectedChat: (selectedChat: any) => void;
// }

// const UserCard: React.FC<UserCardProps> = ({ value, setChatBox, setSelectedChat }) => {
//   const [user] = useState(value);
//   const [isGroup, SetIsGroup] = useState(value.isGroupChat);

//   function readed() {
//     SetIsGroup(false);
//     console.log(user.isGroupChat);
//     setChatBox(true);
//     setSelectedChat(value);
//   }

//   return (
//     <div className="h-[65px] w-full hover:bg-primary pl-4 flex items-center justify-between transition-all ease-in-out duration-100 cursor-pointer" onClick={readed}>
//       <div className="w-[50px] rounded-full overflow-hidden h-[50px] flex items-center justify-center">
//         <img src={user.avatar} alt="" />
//       </div>

//       <div className="h-full w-[80%] py-3 border-b-[1px] border-slate-700 border-wid mr-3 hover:border-0 flex justify-between group">
//         <div>
//           <h1 className="capitalize text-white">{user.name}</h1>
//           <p className={`${isGroup ? "text-white" : "text-slate-500"} text-sm`}>
//             Hello World
//           </p> {/* Use the last message from the fetched data */}
//         </div>

//         <div className="flex flex-col items-end">
//           <p className={isGroup ? "text-line text-xs font-medium" : "text-slate-700 font-medium text-xs"}>
//             19.00
//           </p> {/* Use the time from the fetched data */}
//           <div className="flex w-full">
//             {isGroup ? (
//               <div className="w-[20px] h-[20px] bg-line rounded-full flex items-center justify-center">
//                 <p>1</p>
//               </div>
//             ) : (
//               ""
//             )}
//             <MdKeyboardArrowDown className="absolute group-hover:ml-1  group-hover:static text-icon text-2xl scale-0 group-hover:scale-100 transition-all ease-in-out duration-200" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
