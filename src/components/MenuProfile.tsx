// import { AnimatePresence, motion } from "framer-motion";
// import React from "react";

// const MenuProfile = ({ x, y, menu, setDetailPic, setMenu }) => {
//   const detailHandler = () => {
//     setMenu(false)
//     setDetailPic(true)
//   }
//   return (
//     <AnimatePresence>
//       {menu && (
//         <motion.div
//           animate={{
//             scale: [0, 1],
//             transition: {
//               duration: 0.3,
//             },
//           }}
//           style={{
//             x: x,
//             y: y,
//           }}
//           className="w-[160px] h-[182px] bg-primary origin-top-left z-[999] flex fixed items-center rounded-md">
//           <ul className="w-full text-white">
//             <li className="py-2 hover:bg-secondary px-4 cursor-pointer" onClick={detailHandler}>Lihat foto</li>
//             <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Ambil foto</li>
//             <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Unggah foto</li>
//             <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Hapus foto</li>
//           </ul>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MenuProfile;


import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface MenuProfileProps {
  x: number | undefined;
  y: number | undefined;
  menu: boolean;
  setDetailPic: (value: boolean) => void;
  setMenu: (value: boolean) => void;
}

const MenuProfile: React.FC<MenuProfileProps> = ({ x, y, menu, setDetailPic, setMenu }) => {
  const detailHandler = () => {
    setMenu(false);
    setDetailPic(true);
  };

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          animate={{
            scale: [0, 1],
            transition: {
              duration: 0.3,
            },
          }}
          style={{
            x: x,
            y: y,
          }}
          className="w-[160px] h-[182px] bg-primary origin-top-left z-[999] flex fixed items-center rounded-md"
        >
          <ul className="w-full text-white">
            <li className="py-2 hover:bg-secondary px-4 cursor-pointer" onClick={detailHandler}>
            View photo
            </li>
            <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Take a</li>
            <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Upload a photo</li>
            <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Delete a photo</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuProfile;
