'use client'

import { LiaUserClockSolid } from "react-icons/lia"
import { BsBriefcase } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";

import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from 'react-icons/bi';

const ScrollDownArrow = () => {
  return(
    <>
      <div className="fixed hidden md:block right-1 bottom-0 px-2 flex flex-col items-center justify-end z-50 bg-black bg-opacity-70">
        <a href="#about"><BsPersonBoundingBox className="text-xl text-blue-400 my-3 cursor-pointer" /></a>
        <a href="#experience"><LiaUserClockSolid className="text-xl text-blue-400 my-3 cursor-pointer" /></a>
        <a href="#projects"><BsBriefcase className="text-xl text-blue-400 my-3 cursor-pointer" /></a>
        
        <span className="hidden md:block h-[20vh] w-[1px] bg-blue-400 ml-5"></span>
        
      </div>
      
      <div className="fixed md:hidden bottom-0 w-full flex flex-row justify-between items-center z-50 bg-black">
        <div className="flex flex-row items-center justify-center gap-4 w-[60%]">
          <a 
            href="https://docs.google.com/document/d/12iKHqJsFuhEygVzjrYEoDnGxROF-O26ZvzUS4KZYTGQ/edit?usp=drive_link" 
            target='_blank' 
            className="text-xl text-blue-400 my-3 cursor-pointer bg-blue-400 rounded-full w-full h-full ml-2">
            <p className="text-white text-[10px] text-center">View Resume</p>
          </a>
          <a href="https://github.com/8bitCyborg" target='_blank' className='text-xl'><FaGithub /></a>
          <a href="mailto:shalombjunior@gmail.com" target='_blank' className='text-xl' ><BiLogoGmail /></a>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=2348143842978" target='_blank' className='text-2xl'><FaWhatsapp /></a>
        </div>

        <div className="flex flex-row gap-4 items-center justify-start px-4">
          <a href="#about"><BsPersonBoundingBox className="text-xl text-blue-400 my-3 cursor-pointer" /></a>
          <a href="#experience"><LiaUserClockSolid className="text-xl text-blue-400 my-3 cursor-pointer" /></a>
          <a href="#projects"><BsBriefcase className="text-xl text-blue-400 my-3 cursor-pointer" /></a>
        </div>
      </div>
    </>
  );
};

export default ScrollDownArrow;

