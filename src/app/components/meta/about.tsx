import { BiLogoGmail } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return(
    <div id="about" className="min-h-[50vh] p-5 text-blue-200">
      <div className="sticky top-0 p-1 py-2 w-full bg-black">
        <BsPersonBoundingBox className="text-md" />
      </div>
      <div className="flex flex-col justify-center items-end h-full p-1 md:p-10">
        <h3 className="sticky top-2">About Me</h3>
        <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
        <p className="mt-10 text-left md:w-[50vw] self-start">
          {"I'm a Full-Stack Developer and IT Consultant with over 4 years of hands-on experience delivering web and mobile applications across various industries."}<br/>
          {"I specialize in relevant technologies like React.js, NestJS, and WordPress, and have a strong focus on performance, scalability, and clean code."}<br/><br/>

          {"Over the years, I've worked on everything from building full-stack applications from scratch to refactoring legacy systems and improving existing platforms to meet current standards."}<br/>
          {"I'm proficient in REST API design, component-based architecture, and development best practices to support stable, secure deployments."}<br/><br/>

          {"My roles have also gone beyond writing code. I have advised on and managed server infrastructure, managed deployments and databases, and handled production issues under pressure."}<br/><br/>

          {"I communicate clearly, collaborate well across disciplines, and can manage projects or contribute to technical discussions."}<br/>
          {"Whether I'm working independently or with a cross-functional team, I take ownership of outcomes and focus on delivering real, measurable value."}<br/>
        </p>
        <div className="flex flex-row justify-between my-5 w-[50vw] md:w-[10vw] self-end">
          <a href="https://www.linkedin.com/in/shalom-junior-50661588/" target='_blank' className="text-2xl hover:text-blue-600"><FaLinkedinIn /></a>
          <a href="mailto:shalombjunior@gmail.com" target='_blank' className="text-2xl hover:text-blue-600"><BiLogoGmail /></a>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=2348143842978" target='_blank' className='text-2xl hover:text-blue-600'><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
};

export default About;