'use client'

import { IoIosArrowDown } from "react-icons/io"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollDownArrow = () => {
  return(
    <MdKeyboardDoubleArrowDown
      className='
        fixed bottom-5 ml-[50%]
        animate__animated animate__rubberBand animate__slower animate__infinite
        text-2xl cursor-pointer
      hover:text-[#4169E1] hover:border-[#4169E1] hover:border-[1px] rounded-full
        transition-all duration-500 
      '
      onClick={() => scroll({left: 0, top: 800, behavior: 'smooth'})}
    />
  );
};

export default ScrollDownArrow;

