import { FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa";
import { LiaUserClockSolid } from "react-icons/lia"

const Experience = () => {
  return(
    <div id="experience" className="min-h-[100vh] p-5 text-blue-200">
      <div className="sticky top-0 p-1 py-2 w-full bg-black">
        <LiaUserClockSolid className="text-md" />
      </div>
      <div className="flex flex-col justify-start items-end h-full p-1 md:p-10">
        <h3 className="sticky top-2">Experience</h3>
        <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
        <p className="mt-5 text-left">
          I am a fullstack Web and Cross Platform Mobile App Developer with about four years of professional experience.
        </p>
        <p className="mt-5 text-left">
          With a B.Sc in Computer Science from the University of Benin, Nigeria, my first professional experience was as a student intern at Intelligent Campaign Hub,
          before starting a position as a developer at Uvact Technologies.
        </p>
        <p className="mt-5 text-left">
          In that time, I have become familiar with most of the relevant web/mobile app development technologies 
          while continually striving to stay up-to-date with industry standards and best practices.
        </p>
        <p className="mt-5 text-left">
          My work has me using mainly Javascript as a &apos;first&apos; language, but I am also conversant with PHP and a bit of Python.
        </p>
        <p className="mt-5 text-left">
          I am also familiar with most relevant frameworks and libraries like React/React-Native, NestJS and MongoDB, as well as Laravel and SQL.
        </p>
        <p className="mt-5 text-left">
          When it comes to tools, I am familiar with Git/Github for version control and well as being quite comfortable with the CLI.
        </p>

        <div className="flex flex-row justify-between my-10 w-[50vw] md:w-[10vw] self-end">
          <a href="https://www.linkedin.com/in/shalom-junior-50661588/" target='_blank' className='text-2xl hover:text-blue-600' ><FaLinkedinIn /></a>
          <a href="https://github.com/8bitCyborg" target='_blank' className='text-2xl hover:text-blue-600'><FaGithub /></a>
          <a href="https://medium.com/@the_8bitCyborg" target='_blank' className='text-2xl hover:text-blue-600' ><FaMedium /></a>
        </div>    
      </div>
    </div>
  );
};

export default Experience;