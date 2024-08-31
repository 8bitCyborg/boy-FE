import { BsPersonBoundingBox, BsBriefcase } from "react-icons/bs";
import { LiaUserClockSolid } from "react-icons/lia";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { BiLogoGmail } from 'react-icons/bi';

const Meta = () => {
  return(
    <section className="min-h-[100vh] w-[100vw] mt-[100vh] bg-black z-50 flex flex-row">
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

      <div className="w-[100vw] md:w-[60vw] bg-black">

        <div id="about" className="min-h-[100vh] p-5">
          <div className="sticky top-0 p-1 py-2 w-full bg-black">
            <BsPersonBoundingBox className="text-md" />
          </div>
          <div className="flex flex-col justify-center items-end h-full p-1 md:p-10">
            <h3 className="sticky top-2">About Me</h3>
            <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
            <p className="mt-10 text-left">
              I am a fullstack Web and Cross Platform Mobile App Developer as well as a writer. <br/>
              From software to stories, I can write for you and help you bring that idea you have, to life. <br/>
              I have great interpersonal skills and have proven to be a good communicator which means we will always be on the same page on your project. <br/><br/>
              Do you have a website, app or story you need to be built? <br/>
              Or maybe you already have one and need it maintained, fixed or revamped? <br/><br/>
              You will certainly make the best decision for you project by hiring me.<br/>
              Reach out to me, let us work together, and you will be glad you did.
            </p>
            <div className="flex flex-row justify-between my-10 w-[50vw] md:w-[10vw] self-center md:self-end">
              <a href="https://www.linkedin.com/in/shalom-junior-50661588/" target='_blank' className="text-2xl hover:text-blue-600"><FaLinkedinIn /></a>
              <a href="mailto:shalombjunior@gmail.com" target='_blank' className="text-2xl hover:text-blue-600"><BiLogoGmail /></a>
              <a href="https://api.whatsapp.com/send?1=pt_BR&phone=2348143842978" target='_blank' className='text-2xl hover:text-blue-600'><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div id="experience" className="min-h-[100vh] p-5">
          <div className="sticky top-0 p-1 py-2 w-full bg-black">
            <LiaUserClockSolid className="text-md" />
          </div>
          <div className="flex flex-col justify-start items-end h-full p-1 md:p-10">
            <h3 className="sticky top-2">Experience</h3>
            <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
            <p className="mt-5 text-left">
              I am a fullstack Web and Cross Platform Mobile App Developer with about three years of experience.
            </p>

            <p className="mt-5 text-left">
              I am familiar with most of the relevant web development technologies and continually strive to stay up-to-date with industry standards and best practices. <br/>
              I primarily work with Javascript, using React/React-Native/NextJS in tandem with HTML and CSS for frontend development.
            </p>

            <p className="mt-5 text-left">
              While I admittedly have preference for NestJS and MongoDB for backend development and database management,
              I however also have experience with PHP and Laravel, as well as SQL as alternatives.<br/>
              I am familiar with both Redux Toolkit and the ContextAPI for statemanagement.<br/>
              I am also familiar with both REST and GraphQL for building APIs.
            </p>

            <p className="mt-5 text-left">
              If the need arises, I can also have experience using Wordpress, both themed and headless.
            </p>

            <p className="mt-5 text-left">
              Outside of web and mobile app development,
              I have used Python and C++ and the corresponding libraries and frameworks for Data Analytics and Robotics respectively,
              although these were mostly for hobbyist projects and not in a professional capacity.
            </p>

            <p className="mt-5 text-left">
              For version control, I use Git via Github and I am comfortable using the CLI, as well as Bash for scripting.<br/><br/>
              I have minor devops experience implementing CI/CD pipelines via forge and envoger as well as manually deploying to digitalocean and integrating AWS S3 for storage.
            </p>
          
          </div>
        </div>

        <div id="projects" className="min-h-[100vh] p-5">
          <div className="sticky top-0 p-1 py-2 w-full bg-black">
            <BsBriefcase className="text-md" />
          </div>
          <div className="flex flex-col justify-center items-end h-full p-1 md:p-10">
            <h3 className="sticky top-2">Projects</h3>
            <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
            <p className="mt-10 text-center md:text-right">
              I am a fullstack Web and Cross Platform Mobile App Developer with about three years of experience. I am familiar with most of the relevant technologies in this field.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
};

export default Meta;