import { FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa";
import { LiaUserClockSolid } from "react-icons/lia";
import { BsArrowUpRight } from "react-icons/bs";

const Experience = () => {
  return(
    <div id="experience" className="min-h-[50vh] p-5 text-blue-200">
      <div className="sticky top-0 p-1 py-2 w-full bg-black">
        <LiaUserClockSolid className="text-md" />
      </div>
      <div className="flex flex-col justify-start items-end h-full p-1 md:p-10">
        <h3 className="sticky top-2">Experience</h3>
        <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
        {/* <p className="mt-5">
          {"I'm a Full-Stack Web and Cross-Platform Mobile App Developer with around 4 years of professional experience."}<br/><br/>
          {"I hold a B.Sc. in Computer Science from the University of Benin, Nigeria. My career began with an internship at Intelligent Campaign Hub, followed by a period of freelance development."}<br/><br/>
          {"I later joined Guardian HR as a Webmaster and Tier 2 IT Support personnel, where I gained experience not only in development but also in customer support and business relations."}<br/><br/>
          {"After that, I joined Uvact Technologies as a Full-Stack Developer, where I expanded my hands-on experience building modern digital solutions for web and mobile platforms."}<br/><br/>
          {"Over time, I've become proficient in key web and mobile technologies while continuously staying updated with evolving industry standards and best practices. JavaScript is my primary language, though I’m also experienced with PHP and familiar with Python."}<br/><br/>
          {"I work with frameworks and libraries such as React, React Native, NestJS, and MongoDB, as well as Laravel and SQL-based systems."}<br/>
          {"I'm also comfortable using tools like Git, GitHub, and the command line, which are integral to my development workflow."}
        </p>   */}

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
          min-h-[25vh] flex flex-col md:flex-row border-l-[1px] border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 pl-3 items-start
          lg:hover:bg-black lg:hover:bg-blue-700 lg:hover:rounded-[10px]
          transition-all duration-300
        ">
          <div className="flex flex-col md:w-[30%]">
            <p className="text-lg capitalize text-blue-400">Senior FullStack Web/Mobile Developer</p>
            <a href="https://www.uvact.com" target="_blank" className="text-md text-blue-300">Uvact Technologies<BsArrowUpRight className="inline-block ml-2 text-[15px]" /></a>
            <p className="text-[12px] capitalize text-blue-400 mb-2">Remote | Lagos, Nigeria</p>
            <p className="text-sm capitalize text-blue-400 mb-2">May 2023 - Present</p>
          </div>
          <div className="flex flex-col md:w-[70%]">
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Developed and maintained scalable front- and back-end features for fintech (Baff),e-commerce (Wara), and talent platforms (MillticketCasting).</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Reduced deployment time by 60% through DevOps automation using Fastlane and Shipit.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Architectured and engineered a secure loan module for Baff featuring auto/manual
              repayment, default handling, encrypted transactions, fraud detection, authentication
              hardening, and secure server infrastructure to enhance transaction safety and platform
              trust.
            </p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Led DevOps efforts and implemented CI/CD pipelines, oversaw staging/production environments and managed DigitalOcean servers.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Upgraded React Native versions from 0.71 to 0.75 while maintaining app stability and performance.</p>
            
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Oversaw database migrations and redesigns with zero downtime and no data loss.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Implemented a system for users on the Baff App platform to purchase and fund virtual USD cards, ensuring proper security against fraud.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Built a feature that allows users to fund their Baff App Wallet using their credit cards.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">{"Debugged and resolved a recurring timeout issue on the Baff App's production server,implementing temporary stopgaps during investigation before ultimately restoring system stability and improving response times."}</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">As part of the upgrading process, I migrated the MillticketCasting platform from a wordpress database schema to a new custom database schema with zero data loss.</p>

            <div className="flex flex-row text-blue-400 mt-4 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">React</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">React Native</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Laravel</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">NestJS</p>
            </div>
            <div className="flex flex-row text-blue-400 mt-4 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">CI / CD</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Jest</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">MongoDB</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">MySQL</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
          min-h-[25vh] flex flex-col md:flex-row border-l-[1px] border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 pl-3 items-start
          lg:hover:bg-black lg:hover:bg-blue-700 lg:hover:rounded-[10px]
          transition-all duration-300
        ">
          <div className="flex flex-col md:w-[30%]">
            <p className="text-lg capitalize text-blue-400">Webmaster & IT Support</p>
            <a href="https://www.guardianhr.com" target="_blank" className="text-md text-blue-300">Guardian HR<BsArrowUpRight className="inline-block ml-2 text-[15px]" /></a>
            <p className="text-[12px] capitalize text-blue-400 mb-2">Remote | California, USA</p>
            <p className="text-sm capitalize text-blue-400 mb-2">Jan 2020 - Dec 2022</p>
          </div>
          <div className="flex flex-col md:w-[70%]">
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Maintained core IT infrastructure and custom WordPress site, ensuring seamless
            integration with third party APIs (e.g., Keap, Memberium).</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Configured and enforced email authentication protocols (DKIM, SPF) to improve
            deliverability and security.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Built and managed staging environments to support safe feature testing and
            deployment.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Led UI/UX redesign and custom plugin development, while maintaining 100% site
            uptime and uninterrupted business operations.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Provided Tier 2+ IT support, resolving internal technical issues and maintaining system
            integrity across teams.</p>

            <div className="flex flex-row text-blue-400 mt-4 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">HTML & CSS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Javascript</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">WordPress</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">PHP</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
           min-h-[25vh] flex flex-col md:flex-row border-l-[1px] border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 pl-3 items-start
           lg:hover:bg-black lg:hover:bg-blue-700 lg:hover:rounded-[10px]
           transition-all duration-300
         ">
          <div className="flex flex-col md:w-[30%]">
            <p className="text-lg capitalize text-blue-400">Fullstack Web Developer</p>
            <p className="text-md text-blue-400">Freelance</p>
            <p className="text-[12px] capitalize text-blue-400 mb-2">Remote | Benin City, Nigeria</p>
            <p className="text-sm capitalize text-blue-400 mb-2">Jan 2018 - Dec 2020</p>
          </div>
          <div className="flex flex-col md:w-[70%]">
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">
              {"I built and launched a variety of responsive, user-focused, web and single-page applications (SPAs), each tailored to specific client needs."}<br/><br/>
              {"Projects for brands like Divine Wisdom Schools, Savwal Enterprises, Anne's Wellness, DigitBull, and Mokh Data Inc. involved working closely with stakeholders to deliver performant, mobile-friendly solutions using HTML, CSS, JavaScript, and frameworks like React and WordPress, all while ensuring maintainability and cross-browser compatibility."}
            </p>
            <div className="flex flex-row text-blue-400 mt-4 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">HTML & CSS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Javascript</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Python</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">React</p>
            </div>
            <div className="flex flex-row text-blue-400 mt-4 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">WordPress</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Laravel</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
           min-h-[25vh] flex flex-col md:flex-row border-l-[1px] border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 pl-3 items-start
           lg:hover:bg-black lg:hover:bg-blue-700 lg:hover:rounded-[10px]
           transition-all duration-300
         ">
          <div className="flex flex-col md:w-[30%]">
            <p className="text-lg capitalize text-blue-400">Intern</p>
            <a href="https://www.intelligentinnovations.co" target="_blank" className="text-md text-blue-300">Intelligent Innovations - Onsite | Lagos, Nigeria <BsArrowUpRight className="inline-block ml-2 text-[15px]" /></a>
            <p className="text-sm capitalize text-blue-400 mb-2">Aug 2017 - Dec 2017</p>
          </div>
          <div className="flex flex-col md:w-[70%]">
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Contributed frontend code to a temporary platform for individuals to showcase their talents and get discova&apos;d by agents, et cetera.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Developed responsive front-end interfaces and supported backend integrations for projects including Simbi, DiscovaNG, and custom school admission systems.</p>
            <span className="hidden lg:block text-blue-500 text-md bg-blue-500 w-5 h-0.5 rounded-full mt-5 mb-1"></span> 
            <p className="text-sm text-blue-300 mt-5 md:mt-0">Used Python and TensorFlow for machine learning and data processing to build an automated admission system as part of my final year Computer Science project.</p>
            <div className="flex flex-row text-blue-400 mt-4 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">HTML & CSS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Javascript</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Tensorflow</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between my-5 w-[50vw] md:w-[10vw] self-end">
          <a href="https://www.linkedin.com/in/shalom-junior-50661588/" target='_blank' className='text-2xl hover:text-blue-600' ><FaLinkedinIn /></a>
          <a href="https://github.com/8bitCyborg" target='_blank' className='text-2xl hover:text-blue-600'><FaGithub /></a>
          <a href="https://medium.com/@the_8bitCyborg" target='_blank' className='text-2xl hover:text-blue-600' ><FaMedium /></a>
        </div>    
      </div>
    </div>
  );
};

export default Experience;