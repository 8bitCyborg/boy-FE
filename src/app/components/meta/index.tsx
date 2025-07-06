import About from "./about";
import Experience from "./experience";
import Work from "./work";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from 'react-icons/bi';

const Meta = () => {
  return(
    <section className="min-h-[100vh] w-[100vw] mt-[100vh] bg-black z-40 flex flex-row">
      <div className="hidden md:flex flex-col justify-end pb-40 items-start pl-[5%] w-[40vw] h-[100vh] sticky top-0">
        <a href="#about" className="flex flex-col justify-start items-start w-[10rem] mb-2">
          <p>About Me</p>
          <p className="w-10 h-[1px] bg-white self-start"></p>
        </a>
        <a href="#experience" className="flex flex-col justify-start items-start w-[10rem] mb-2">
          <p>Experience</p>
          <p className="w-10 h-[1px] bg-white self-start"></p>
        </a>
        <a href="#projects" className="flex flex-col justify-start items-start w-[10rem] mb-2">
          <p>Highlighted Work</p>
          <p className="w-10 h-[1px] bg-white self-start"></p>
        </a>

        <div className="flex justify-center items-start">
          {/* <p className="text-black">Contact Me</p> */}
          <div className='flex flex-row animate__animated animate__slower animate__fadeInUp gap-5 mt-5'>
            <a href="https://www.linkedin.com/in/shalom-junior-50661588/" target='_blank' className='text-2xl' ><FaLinkedinIn /></a>
            <a href="https://github.com/8bitCyborg" target='_blank' className='text-2xl'><FaGithub /></a>
            <a href="mailto:shalombjunior@gmail.com" target='_blank' className='text-2xl' ><BiLogoGmail /></a>
            <a href="https://x.com/_shalomboy" target='_blank' className='text-2xl' ><FaXTwitter /></a>
            <a href="https://medium.com/@the_8bitCyborg" target='_blank' className='text-2xl' ><FaMedium /></a>
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=2348143842978" target='_blank' className='text-2xl'><FaWhatsapp /></a>
          </div>
        </div>

        <a href="https://docs.google.com/document/d/12iKHqJsFuhEygVzjrYEoDnGxROF-O26ZvzUS4KZYTGQ/edit?usp=drive_link" target='_blank' 
          className="text-xl text-blue-400 my-3 cursor-pointer bg-blue-400 rounded-lg w-[15rem] h-8 text-center flex justify-center items-center">
          <p className="text-white text-[10px] text-center">View Resume</p>
        </a>
      </div>

      <div className="w-[100vw] md:w-[60vw] bg-black">
        <About />
        <Experience />
        <Work />
      </div>

    </section>
  )
};

export default Meta;