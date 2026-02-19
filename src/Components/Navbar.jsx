// import { div, nav } from 'framer-motion/client'
// import React from 'react'
// import { useState } from 'react'
// import { FaBars } from 'react-icons/fa'
// import { FaXmark } from 'react-icons/fa6'
// 
// function Navbar() {
//   const [showMenu,setShowMenu] = useState(false)
//   return (
//     <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
// 
//       <div className='container mx-auto flex justify-between items-center '>
//         <div>
//           <a href="#" className='text-3xl font-bold text-white'>Sun <span className='text-purple-600'>.dev</span>
//           <div className='w-4 h-4 bg-purple rounded-full'></div></a>
//         </div>
//         <div className='hidden md:flex space-x-10'>
//         <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Home</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>About</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Skills</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Projects</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Experience</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Contact</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//         </div>
//         {/* Mobile Button */}
//          <div className='md:hidden'>
//           {
//           showMenu ?
//             
//         <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>:
//          <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
//           }
//         
//       </div>
//       </div>
// 
//       {/* Mobile Menu */}
// 
//       {
//         showMenu && (
//           <div>
//              <a href="#" className='text-3xl font-bold text-white'>Sun <span className='text-purple-600'>.dev</span>
//           <div className='w-4 h-4 bg-purple rounded-full'></div></a>
//         </div>
//         <div className='hidden md:flex space-x-10'>
//         <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Home</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>About</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Skills</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Projects</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Experience</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//          <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
//           <span>Contact</span>
//           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
//         </a>
//           </div>
//         )
//       }
//      
//     </nav>
//   )
// }
// 
// export default Navbar

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-white relative">
          Sun <span className="text-purple-600">.dev</span>
          <div className="w-4 h-4 bg-purple-600 rounded-full absolute -right-6 top-2"></div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden text-white">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-6 bg-dark-200 py-6 rounded-lg">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setShowMenu(false)}
              className="text-white/80 hover:text-purple-500 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
