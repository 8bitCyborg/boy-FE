'use client'

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { LiaUserClockSolid } from "react-icons/lia"
import { BsBriefcase } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";


const ScrollDownArrow = () => {
  return(
    <div className="fixed right-1 bottom-0 px-2 flex flex-col items-center justify-end z-50 bg-black bg-opacity-70">
      <a href="#about"><BsPersonBoundingBox className="text-xl text-blue-400 my-3 cursor-pointer" /></a>
      <a href="#experience"><LiaUserClockSolid className="text-xl text-blue-400 my-3 cursor-pointer" /></a>
      <a href="#projects"><BsBriefcase className="text-xl text-blue-400 my-3 cursor-pointer" /></a>

      <span className="hidden md:block h-[20vh] w-[1px] bg-blue-400"></span>
      {/* <MdKeyboardDoubleArrowDown
        className='
          fixed bottom-5 ml-[50%] w-full
          animate__animated animate__rubberBand animate__slower animate__infinite
          text-2xl cursor-pointer
        hover:text-[#4169E1] hover:border-[#4169E1] hover:border-[1px] rounded-full
          transition-all duration-500
        '
        onClick={() => scroll({left: 0, top: 800, behavior: 'smooth'})}
      /> */}
    </div>
  );
};

export default ScrollDownArrow;

