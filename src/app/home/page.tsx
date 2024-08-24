import 'animate.css';
import { GiMonoWheelRobot } from "react-icons/gi";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from 'react-icons/bi';

import './style.css';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='flex flex-col justify-center items-center'>
        <GiMonoWheelRobot className='
          robot-logo 
          animate__animated animate__bounce animate__slower animate__infinite'
        />
        <div className='contact-container animate__animated animate__slower animate__fadeInUp'>
          <a href="https://www.linkedin.com/in/shalom-junior-50661588/" target='_blank' className='contact-icon' ><FaLinkedinIn /></a>
          <a href="https://github.com/8bitCyborg" target='_blank' className='contact-icon'><FaGithub /></a>
          <a href="mailto:shalombjunior@gmail.com" target='_blank' className='contact-icon' ><BiLogoGmail /></a>
          <a href="https://x.com/The_8bitCyborg" target='_blank' className='contact-icon' ><FaXTwitter /></a>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=2348143842978" target='_blank' className='contact-icon'><FaWhatsapp /></a>
          </div>
      </div>
    </main>
  );
};

export default Home;