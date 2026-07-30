import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { motion, spring , AnimatePresence } from "motion/react"
import { IoMenu , IoClose } from "react-icons/io5";
import { FaGithub , FaInstagram ,  FaLinkedin } from "react-icons/fa";

const Header = () => {

    //----------------- Toggle the Menu Open/Close-----------------


    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    //------------------ Say Hii Form Open/Close ------------------

    const [ contactFormOpen , setContactFormOpen] = useState(false);
    const openContactForm = () => setContactFormOpen(true)
    const closeContactForm = () => setContactFormOpen(false)

  return (
    <header className="absolute w-full z-50 transition-all duration-300 bg-gray-100 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/*----------------------- Logo----------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.5,
          }}
          className="flex items-center"
        >
          <img src={Logo} alt="Burnitup" />
        </motion.div>

        {/*--------------- Desktop Navigation --------------- */}

        <nav className="lg:flex   hidden  space-x-8 ">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: spring,
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className="relative text-gray-800 hover:text-violet-600 font-semibold transition-colors duration-300 group"
              href="#"
            >
              {item}

              {/* Underline Effect */}

              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300
                    "
              ></span>
            </motion.a>
          ))}
        </nav>

        {/*--------------- Social Links --------------- */}

        <div className="md:flex  hidden   items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="text-gray-700 hover:text-pink-600 transition-all duration-300"
            href="#"
          >
            <FaGithub size={27} />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="text-gray-700 hover:text-pink-600 transition-all duration-300"
            href="#"
          >
            <FaInstagram size={27} />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="text-gray-700 hover:text-pink-600 transition-all duration-300"
            href="#"
          >
            <FaLinkedin size={27} />
          </motion.a>
        </div>

        {/*--------------- Connect Me Btn --------------- */}

        <motion.button
          onClick={openContactForm}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          
          className="md:flex hidden ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold transition-colors duration-500 hover:from-violet-500 hover:to-pink-500 hover:shadow-[0_0_30px_rgba(168,85,247,1)]"
        >
          Say Hi
        </motion.button>

        {/*--------------- Mobile Menu Btn --------------- */}

        {/* Hamburger Toggle Btn Apply */}

        <div className="md:hidden flex items-center">
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu}>
            {isOpen ? <IoClose size={27} /> : <IoMenu size={27} />}
          </motion.button>
        </div>
      </div>

      {/*------------- Actual Mobile Screen ------------- */}

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-gray-100 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3 ">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              onClick={toggleMenu}
              className=" font-semibold py-2  text-gray-800 hover:text-violet-600 font-semibold transition-colors duration-300"
              key={item}
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Borderline Btw Menu & Icons */}

        <div className="pt-4 border-t-2 border-gray-300  ">
          {/* Icons */}

          <div className="flex items-center justify-center space-x-5 ">
            <a href="#">
              <FaGithub
                size={27}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300"
              />
            </a>
            <a href="#">
              <FaInstagram
                size={27}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300"
              />
            </a>
            <a href="#">
              <FaLinkedin
                size={27}
                className="text-gray-700 hover:text-pink-600 transition-all duration-300"
              />
            </a>
          </div>

          <motion.button
            whileHover={{scale:1.02}}
            whileTap={{scale:0.97}}
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-5 block w-full  px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold transition-colors duration-500 hover:from-violet-500 hover:to-pink-500  hover:shadow-[0_0_30px_rgba(168,85,247,1)]"
          >
            Say Hii
          </motion.button>
        </div>
      </motion.div>

      {/* ------------------ Contact Form ------------------ */}

        <AnimatePresence>
      {contactFormOpen && (
        // Form Background Black-Blur

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4">

          {/* Actual Form Create */}

          <motion.div 
          initial={{scale:0.8 , opacity:0, y:30 }}
          animate={{scale:1 , opacity:1 , y:0 }}
          exit={{scale:0.8 , opacity:0 , y:30}}
          transition={{
            type:"spring",
            damping:30,
            stiffness:200,
            duration:0.8}}
          className="bg-white dark:bg-white rounded-xl shadow-xl   w-full max-w-md p-6">

            {/* Get in Touch & Close Btn like Menu */}

            <div className="flex justify-between items-center mb-4">

              <h1 className=" text-2xl font-semibold text-gray-800">
                Get in touch
              </h1>

              <button onClick={closeContactForm}>
                <IoClose size={27} />
              </button>
            </div>

            {/* Input Forms */}

            <form className='space-y-4'>
                <div>
                    <label htmlFor='name'>
                    Name
                    </label>
                    <input 
                    type="text"
                    id='name'
                    placeholder='Your Name'
                    className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white' />
                </div>

                <div>
                    <label htmlFor='email'>
                    Name
                    </label>
                    <input 
                    type="email"
                    id='email'
                    placeholder='Your Email'
                    className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white' />
                </div>

                <div>
                    <label htmlFor='message'>
                    Message
                    </label>
                    <textarea 
                    rows="4"
                    id='message'
                    placeholder='May i help you ?'
                    className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white' />
                </div>

                <motion.button 
                type='submit'
                whileHover={{scale:1.03}}
                whileTap={{scale:0.97}}
                className="mt-5 block w-full px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold transition-colors duration-500 hover:from-violet-500 hover:to-pink-500  hover:shadow-[0_0_30px_rgba(168,85,247,1)]">
                    Send Message
                </motion.button>
            </form>
          </motion.div>  
        </motion.div>
      )}

      </AnimatePresence>

      
    </header>
  );
}

export default Header
