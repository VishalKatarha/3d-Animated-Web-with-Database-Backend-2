import React from 'react';
import { motion, spring , AnimatePresence } from "motion/react";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className='relative h-screen bg-gradient-to-b from-white to-pink-300 flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 overflow-hidden' >
        
        {/* Left Section - Content */}


        <div className='z-40 xl:mb-0 mb-[20%]'>
            <motion.h1 
            initial={{ opacity:0 , y:80 }}
            animate={{ opacity:1 , y:0 }}
            transition={{
                type:"spring",
                stiffness:40,
                damping:25,
                delay:1.3,
                duration:1.5,
            }}
            className='text-5xl md:text-7xl lg:text-8xl font-semibold z-10 mb-6 bg-gradient-to-r from-violet-500 to-pink-500  bg-clip-text text-transparent overflow-hidden pb-2 text-center md:text-left '>
                Creative Developer <br/>& Digital Artist
            </motion.h1>

            <motion.p 
            initial={{ opacity:0 , y:80 }}
            animate={{ opacity:1 , y:0 }}
            transition={{
                type:"spring",
                stiffness:40,
                damping:25,
                delay:1.8,
                duration:1.5,
            }}
            className='text-xl md:text-1xl lg:text-2xl  max-w-2xl font-medium text-center md:text-left text-gray-600 '>
                I design and develop immersive web experiences using React, TypeScript, GSAP, Framer Motion, and 3D technologies. Passionate about building modern, interactive, and performance-driven digital products.
            </motion.p>
        </div>

        {/* Right Side - 3D */}
        
        
        <Spline className=' absolute xl:right-[-28%] top-[-20%] lg:top-0' scene="https://prod.spline.design/pRVTddTUAKQydI31/scene.splinecode" />
       

    </section>
  )
}

export default HeroSection
