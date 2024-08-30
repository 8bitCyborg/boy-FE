import 'animate.css';
import './style.css';
import { GiMonoWheelRobot } from "react-icons/gi";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from 'react-icons/bi';

import Meta from '../components/meta';
import ScrollDownArrow from '../components/arrow-down';

const Home = () => {
  return (
    <main className="flex min-h-screen">
      <a href="#" className='typewriter mt-[1.5em] fixed -top-3 right-3 flex justify-center items-end flex-col cursor-pointer z-50'>
        <p className='qwitcher-grypen-regular text-2xl text-white'>the_8bitCyborg</p>
        <span className='h-[0.1px] w-[80%] bg-white animate__animated animate animate__fadeInRight animate__delay-4s'></span>
      </a>

      <div className='h-[100vh] w-[100vw] fixed flex flex-col items-center justify-center'>
        <GiMonoWheelRobot className='
          robot-logo 
          animate__animated animate__bounce animate__slower animate__infinite'
        />
        <div className='contact-container animate__animated animate__slower animate__fadeInUp'>
          <a href="https://www.linkedin.com/in/shalom-junior-50661588/" target='_blank' className='contact-icon' ><FaLinkedinIn /></a>
          <a href="https://github.com/8bitCyborg" target='_blank' className='contact-icon'><FaGithub /></a>
          <a href="mailto:shalombjunior@gmail.com" target='_blank' className='contact-icon' ><BiLogoGmail /></a>
          <a href="https://x.com/_shalomboy" target='_blank' className='contact-icon' ><FaXTwitter /></a>
          <a href="https://medium.com/@the_8bitCyborg" target='_blank' className='contact-icon' ><FaMedium /></a>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=2348143842978" target='_blank' className='contact-icon'><FaWhatsapp /></a>
        </div>
      </div>

      <ScrollDownArrow />

      <Meta />
    </main>
  );
};

export default Home;