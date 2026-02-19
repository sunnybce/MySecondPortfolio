// import React from 'react'
// import { motion } from 'framer-motion'
// 
// function Contact() {
//   return (
//     <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.9, ease: 'easeOut' }}
//                 viewport={{ once: false, amount: 0.2 }}
//                 id='contact'
//                 className='py-20 bg-dark-200'
//            >
//             <div className='container mx-auto px-6'>
//                 <h2 className='text-3xl font-bold text-center mb-4'>Get In <span className='text-purple'>Touch</span></h2>
//                 <p className='text-gray-400  text-center max-w-2xl mx-auto mb-16'>Have a Project in Mind or Want To Collabrate? Let's Talk</p>
//                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
//                     <div>
//                         <form action="" className='space-y-6'>
//                             <label htmlFor="name" className='block'>Your Name</label>
//                             <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none ' type="text" required />
//                         </form>
//                     </div>
//                      <div>
//                         <form action="" className='space-y-6'>
//                             <label htmlFor="email" className='block'>Email Address</label>
//                             <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none ' type="email" required />
//                         </form>
//                     </div>
//                      <div>
//                         <form action="" className='space-y-6'>
//                             <label htmlFor="message" className='block'> Your Message</label>
//                             <textarea className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none ' type="text"/>
//                         </form>
//                     </div>
//                     <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>Send</button>
//                     
//                 </div>
//             </div>
//       
//     </motion.div>
//   )
// }
// 
// export default Contact


import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarker, FaPhone,FaGithub, FaInstagramSquare } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { BsTwitter, BsTwitterX } from 'react-icons/bs'

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Get In <span className='text-purple'>Touch</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Have a Project in Mind or Want To Collaborate? Let's Talk
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto '>
          <form className='space-y-6'>

            <div>
              <label className='block mb-2'>Your Name</label>
              <input
                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                type="text"
                required
              />
            </div>

            <div>
              <label className='block mb-2'>Email Address</label>
              <input
                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                type="email"
                required
              />
            </div>

            <div>
              <label className='block mb-2'>Your Message</label>
              <textarea
                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                rows="5"
                required
              />
            </div>

            {/* Button */}
            <button
              type='submit'
              className=' w-full px-8 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'
            >
              Send Message
            </button>

          </form>
          {/* contact information */}
          <div className='space-y-8 p-30 '>
            <div className='flex items-start '>
                <div className='text-purple text-2xl mr-4' ><FaMapMarker/></div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2 '>Location</h3>
                        <p className='text-gray-400'>Noida Sector 44 </p>
                    </div>
               
            </div>
            <div className='flex items-start '>
                <div className='text-purple text-2xl mr-4' ><FaEnvelope/></div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2 '>Email</h3>
                        <p className='text-gray-400'>mr.sunnysharma3569@gmail.com </p>
                    </div>
               
            </div>
            <div className='flex items-start  '>
                <div className='text-purple text-2xl mr-4' ><FaPhone/></div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2 '>Phone</h3>
                        <p className='text-gray-400'>+91 9525773569</p>
                    </div>
               
            </div>
            <div className='pt-4'>
                <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                <div className='flex space-x-4'>
                  <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-purple hover:text-white transition duration-300 '><FaGithub/></a> 
                   <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-purple hover:text-white transition duration-300 '><LiaLinkedin/></a> 
                
                 <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-black hover:bg-purple hover:text-white transition duration-300 '><BsTwitterX/></a> 
                
                 <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-purple hover:text-white transition duration-300 '><FaInstagramSquare/></a> 
               
                </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
