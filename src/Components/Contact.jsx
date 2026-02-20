// 
// 
// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FaEnvelope, FaMapMarker, FaPhone,FaGithub, FaInstagramSquare } from 'react-icons/fa'
// import { LiaLinkedin } from 'react-icons/lia'
// import {  BsTwitterX } from 'react-icons/bs'
// import emailjs from "@emailjs/browser";
// 
// 
// function Contact() {
//   const [formData,setFromData] = useState({
//     name:"",
//     email:"",
//     message:"",
//   })
//  
//   const SERVICE_ID = "service_hjknn0j"
//   const TEMPLATE_ID = "template_5yxhb8k"
//   const PUBLIC_KEY = "Pnp4aqH1Fhey84N_d"
//   const handlesubmit = (e)=>{
//     e.preventDefault()
// 
//     emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then((result)=>{
//       alert("Message Sent!");
//       setFromData({name:"",email:"",message:""})
//     }).catch(()=> alert("oops! something went wrong. please Try Again."))
//   }
//   
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.9, ease: 'easeOut' }}
//       viewport={{ once: false, amount: 0.2 }}
//       id='contact'
//       className='py-20 bg-dark-200'
//     >
//       <div className='container mx-auto px-6'>
//         <h2 className='text-3xl font-bold text-center mb-4'>
//           Get In <span className='text-purple'>Touch</span>
//         </h2>
// 
//         <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
//           Have a Project in Mind or Want To Collaborate? Let's Talk
//         </p>
// 
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto ' onSubmit={handlesubmit}>
//           <form className='space-y-6'>
// 
//             <div>
//               <label className='block mb-2'>Your Name</label>
//               <input
//                 className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
//                 type="text" value={formData.name} onChange={(e)=> setFromData({...formData,name:e.target.value})}
//                 required
//               />
//             </div>
// 
//             <div>
//               <label className='block mb-2'>Email Address</label>
//               <input
//                 className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
//                 type="email"
//                 value={formData.email}
//                 onChange={(e)=> setFromData({...formData,email:e.target.value})}
//                 required
//               />
//             </div>
// 
//             <div>
//               <label className='block mb-2'>Your Message</label>
//               <textarea
//                 className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
//                 rows="5" value={formData.message}
//                 onChange={(e)=> setFromData({...formData,message:e.target.value})}
//                 required
//               />
//             </div>
// 
//             {/* Button */}
//             <button
//               type='submit'
//               className=' w-full px-8 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'
//             >
//               Send Message
//             </button>
// 
//           </form>
//           {/* contact information */}
//           <div className='space-y-8 p-30 '>
//             <div className='flex items-start '>
//                 <div className='text-purple text-2xl mr-4' ><FaMapMarker/></div>
//                     <div>
//                         <h3 className='text-lg font-semibold mb-2 '>Location</h3>
//                         <p className='text-gray-400'>Noida Sector 44 </p>
//                     </div>
//                
//             </div>
//             <div className='flex items-start '>
//                 <div className='text-purple text-2xl mr-4' ><FaEnvelope/></div>
//                     <div>
//                         <h3 className='text-lg font-semibold mb-2 '>Email</h3>
//                         <p className='text-gray-400'>mr.sunnysharma3569@gmail.com </p>
//                     </div>
//                
//             </div>
//             <div className='flex items-start  '>
//                 <div className='text-purple text-2xl mr-4' ><FaPhone/></div>
//                     <div>
//                         <h3 className='text-lg font-semibold mb-2 '>Phone</h3>
//                         <p className='text-gray-400'>+91 9525773569</p>
//                     </div>
//                
//             </div>
//             <div className='pt-4'>
//                 <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
//                 <div className='flex space-x-4'>
//                   <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-purple hover:text-white transition duration-300 '><FaGithub/></a> 
//                    <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-purple hover:text-white transition duration-300 '><LiaLinkedin/></a> 
//                 
//                  <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-black hover:bg-purple hover:text-white transition duration-300 '><BsTwitterX/></a> 
//                 
//                  <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-purple hover:text-white transition duration-300 '><FaInstagramSquare/></a> 
//                
//                 </div>
//             </div>
// 
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }
// 
// export default Contact


import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarker, FaPhone, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      alert("Message Sent Successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Oops! Something went wrong ❌");
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* FORM */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block mb-2">Your Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Email Address</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Your Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-8">

            <div className="flex items-start">
              <FaMapMarker className="text-purple text-2xl mr-4" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">Noida Sector 44</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="text-purple text-2xl mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">mr.sunnysharma3569@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-purple text-2xl mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+91 9525773569</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <FaGithub />
              <LiaLinkedin />
              <BsTwitterX />
              <FaInstagramSquare />
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;