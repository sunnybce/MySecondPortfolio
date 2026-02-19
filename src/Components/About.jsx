// import React from 'react'
//  import { motion } from 'framer-motion'
// import { assets } from '../assets/assets'
// function About() {
//   return (
//     <motion.div initial = {{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration: 0.6, ease:'easeOut'}} viewport={{once:true}}
//     id='about'
//     className='py-20 bg-dark-200'
//     >
//         <div className='container mx-25 px-4'>
//        {/* Heading */}
//        <h2 className='text-3xl font-bold text-center mb-4'>About <span className='text-purple'>Me</span></h2>
//        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get To Know More My Background And Passion</p>
//        {/* image + my journey */}
//        <div className='flex flex-col md:flex-row items-center gap-12'>
//         {/* image */}
//         <div className=' md:w-1/2 rounded-2xl overflow-hidden'>
//         < motion.img
//           initial={{opacity:0,y:50}}
//           whileInView={{opacity:1,y:0}}
//           transition={{duration:0.9, ease: 'easeOut'}}
//           viewport={{once:false,amount:0.2}}
//           className='w-full h-full object-cover'
//         src={assets.profileImg} alt="Profile2" />
//         
//         </div>
//         {/* text Content */}
//         <motion.div className=''>
//  initial={{opacity:0,y:50}}
//           whileInView={{opacity:1,y:0}}
//           transition={{duration:0.9, ease: 'easeOut'}}
//           viewport={{once:false,amount:0.2}}
//           className='w-full h-full object-cover'
//         </motion.div>
// 
//         </div>
// 
//        </div>
//         </div>
//               
// 
//     </motion.div>
//   )
// }
// 
// export default About


import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import { data } from 'react-router-dom'
import { div } from 'framer-motion/client'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-25 px-4'>

        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>
          About <span className='text-purple'>Me</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get To Know More My Background And Passion
        </p>

        {/* Image + Content */}
        <div className='flex flex-col md:flex-row items-center gap-12'>

          {/* Image */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='w-full h-full object-cover'
              src={assets.profileImg}
              alt="Profile"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'
          >
            <div className='rounded-2xl p-8'>
            <h3 className='text-2xl font-semibold mb-6'>
              My Journey
            </h3>
             <p className='text-gray-300 leading-relaxed mb-12'>
              I am a passionate MERN Stack Developer specializing in building modern, responsive, and user-friendly web applications. I work with MongoDB, Express.js, React, and Node.js to create scalable full-stack solutions. I enjoy solving problems, learning new technologies, and delivering clean, efficient, and maintainable code in every project I build.
            </p>
            <p className='text-gray-300 leading-relaxed '>
              I developed a full-stack E-Commerce web application using MongoDB, Express.js, React.js, and Node.js. The project includes user authentication (JWT), product listing, cart management, order placement, and admin dashboard. I implemented REST APIs for backend operations and connected frontend with backend using Axios.</p>
              {/* card */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                  aboutInfo.map((data,index)=>(

                    <div key={index} className='bg-dark-100 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                      <div className='text-purple text-4xl mb-4 '>
                        <data.icon/>

                      </div>
                      <h3 className='text-xl font-semibold mb-3'>{data.icon}</h3>
                      <p className='text-gray-400'>{data.description}</p>
                    </div>
                  ))
                }

              </div>
            </div>
           
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default About
