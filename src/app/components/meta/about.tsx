import { BiLogoGmail } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return(
    <div id="about" className="min-h-[100vh] p-5 text-blue-200">
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
        <div className="flex flex-row justify-between my-10 w-[50vw] md:w-[10vw] self-end">
          <a href="https://www.linkedin.com/in/shalom-junior-50661588/" target='_blank' className="text-2xl hover:text-blue-600"><FaLinkedinIn /></a>
          <a href="mailto:shalombjunior@gmail.com" target='_blank' className="text-2xl hover:text-blue-600"><BiLogoGmail /></a>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=2348143842978" target='_blank' className='text-2xl hover:text-blue-600'><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
};

export default About;