import { BsPersonBoundingBox, BsBriefcase } from "react-icons/bs";
import { LiaUserClockSolid } from "react-icons/lia";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from 'react-icons/bi';

const Meta = () => {
  return(
    <section className="min-h-[100vh] w-[100vw] mt-[100vh] bg-black opacity-95 flex flex-row">
      <div className="hidden md:flex flex-col justify-center items-center w-[40vw] h-[100vh] sticky top-0">
        <a href="#about" className="flex flex-row justify-center items-center">
          <p className="w-10 h-[1px] bg-white mr-2"></p>
          <p>Me</p>
        </a>
        <a href="#experience" className="flex flex-row justify-center items-center">
          <p className="w-10 h-[1px] bg-white mr-2"></p>
          <p>Experience</p>
        </a>
        <a href="#projects" className="flex flex-row justify-center items-center">
          <p className="w-10 h-[1px] bg-white mr-2"></p>
          <p>Projects</p>
        </a>
      </div>

      <div className="w-[100vw] md:w-[60vw] bg-gradient-to-r from-[#000000] to-[#000129]">
        <div id="about" className="h-[100vh] p-5">
          <div className="sticky top-1 p-1 bg-gradient-to-r from-[#000000] to-[#000129] py-2">
            <BsPersonBoundingBox className="text-md" />
          </div>
          <div className="flex flex-col justify-center items-end h-full p-1 md:p-10">
            <h3 className="sticky top-2">About Me</h3>
            <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
            <p className="mt-10 text-right md:text-left">
              I am a fullstack Web and Cross Platform Mobile App Developer as well as a writer. <br/>
              From software to stories, I can write for you and help you bring that idea you have, to life. <br/>
              I have great interpersonal skills and have proven to be a good communicator which means we will always be on the same page on your project. <br/><br/>
              Do you have a website, app or story you need to be built? <br/>
              Or maybe you already have one and need it maintained, fixed or revamped? <br/><br/>
              You'll certainly make the best decision for you project by hiring me.<br/>
              Reach out to me, let's work together, and you will be glad you did.
            </p>
            <div className="flex flex-row justify-between my-10 w-[50vw] md:w-[10vw] self-center md:self-end">
              <a href="https://www.linkedin.com/in/shalom-junior-50661588/" target='_blank' className="text-2xl"><FaLinkedinIn /></a>
              <a href="mailto:shalombjunior@gmail.com" target='_blank' className="text-2xl"><BiLogoGmail /></a>
              <a href="https://api.whatsapp.com/send?1=pt_BR&phone=2348143842978" target='_blank' className='text-2xl'><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div id="experience" className="h-[100vh] p-5">
          <div className="sticky top-1 p-1 bg-gradient-to-r from-[#000000] to-[#000129] py-2">
            <LiaUserClockSolid className="text-md" />
          </div>
          <div className="flex flex-col justify-center items-end h-full p-1 md:p-10">
            <h3 className="sticky top-2">Experience</h3>
            <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
            <p className="mt-10 text-center md:text-right">
              I am a fullstack Web and Cross Platform Mobile App Developer with about three years of experience. I'm familiar with most of the relevant technologies in this field.
              I have great interpersonal skills as I have proven to be a good communicator who can work with and carry along both technical and  non-technical individuals in any project.
            </p>
          </div>
        </div>

        <div id="projects" className="h-[100vh] p-5">
          <div className="sticky top-1 p-1 bg-gradient-to-r from-[#000000] to-[#000129] py-2">
            <BsBriefcase className="text-md" />
          </div>
          <div className="flex flex-col justify-center items-end h-full p-1 md:p-10">
            <h3 className="sticky top-2">Projects</h3>
            <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
            <p className="mt-10 text-center md:text-right">
              I am a fullstack Web and Cross Platform Mobile App Developer with about three years of experience. I'm familiar with most of the relevant technologies in this field.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
};

export default Meta;