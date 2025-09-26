import { BsBriefcase, BsArrowUpRight } from "react-icons/bs";

const Work = () => {
  return(
    <div id="projects" className="min-h-[100vh] p-5 text-blue-200 mb-20">
      <div className="sticky top-0 p-1 py-2 w-full bg-black">
        <BsBriefcase className="text-md" />
      </div>
      <div className="flex flex-col justify-center items-end h-full p-1 md:p-10">
        <h3 className="sticky top-0 bg-black w-full z-20 text-right">Highlighted Work</h3>
        <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
        <p className="mt-10 text-left w-full">
          {"Over the course of my career, I've had the privilege of contributing to a range of projects."}<br/>
          {"These include lightweight single-page applications as well as full-scale enterprise-level systems."}<br/><br/>
          {"Some of these are highlighted below."}
        </p>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
          min-h-[15vh] flex flex-col md:flex-row border-l-[1px] rounded-md border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 items-start pl-3 md:pl-0 self-start
          animate__animated animate__fadeInUp animate__delay-1s
          lg:hover:bg-blue-500 lg:hover:text-white lg:hover:p-4
          transition-all duration-300
          w-full
        ">
          <a href="https://baffapp.com/" target="_blank" 
            className="text-md text-blue-300 flex flex-row md:flex-col w-full md:w-1/4">
            <p className="text-sm text-blue-400">ShalomBoy</p>
            <BsArrowUpRight className="inline-block text-[15px] ml-2 mt-1" />
          </a>

          <div className="flex flex-col w-full md:w-3/4">
            {/* <h4 className="text-sm text-blue-400">Frontend</h4> */}
            <p className="text-sm mb-1 text-blue-300">A personal website for myself, showcasing my work and experience and hobbies.</p>
            <p className="text-sm mb-1 text-blue-300">Currently hosted on Netlify.</p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">NextJS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Netlify</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Spotify</p>
            </div>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">CI / CD</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
          min-h-[15vh] flex flex-col md:flex-row border-l-[1px] rounded-md border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 items-start pl-3 md:pl-0
          animate__animated animate__fadeInUp animate__delay-1s
          lg:hover:bg-blue-500 lg:hover:text-white lg:hover:p-4
          transition-all duration-300
        ">
          <a href="https://baffapp.com/" target="_blank" className="text-md text-blue-300 flex flex-row md:flex-col w-full md:w-1/4">
            <p className="text-sm text-blue-400">BAFF</p>
            <BsArrowUpRight className="inline-block text-[15px] ml-2 mt-1" />
          </a>

          <div className="flex flex-col w-full md:w-3/4">
            {/* <h4 className="text-sm text-blue-400">Frontend</h4> */}
            <p className="text-sm mb-1 text-blue-300">A fintech app that helps users manage their finances as well as spend money to other.</p>
            <p className="text-sm mb-1 text-blue-300">Users can also create virtual USD cards and access loans.</p>
            <p className="text-sm mb-1 text-blue-300">Contributed to the frontend and backend development, as well as database management and Ci/Cd implementation, while managing server infrastructure.</p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-[13px] items-center justify-center px-4 py-1 mr-2 rounded-2xl">React Native</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">NestJS</p>
            </div>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Laravel</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">DigitalOcean</p>
            </div>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">MongoDB</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">CI / CD</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
          min-h-[15vh] flex flex-col md:flex-row border-l-[1px] rounded-md border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 items-start pl-3 md:pl-0
          animate__animated animate__fadeInUp animate__delay-1s
          lg:hover:bg-blue-500 lg:hover:text-white lg:hover:p-4
          transition-all duration-300
        ">
          <a href="https://divinewisdomschoolsinstituteintl.org/" target="_blank" className="text-md text-blue-300 flex flex-row md:flex-col w-full md:w-1/4">
            <p className="text-sm text-blue-400">Divine Wisdom International Schools</p>
            <BsArrowUpRight className="inline-block text-[15px] ml-2 mt-1" />
          </a>

          <div className="flex flex-col w-full md:w-3/4">
            {/* <h4 className="text-sm text-blue-400">Frontend</h4> */}
            <p className="text-sm mb-1 text-blue-300">
              Redesigned the school&apos;s website to improve user experience and accessibility and bring it up to date with modern web standards.
            </p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-[13px] px-4 py-1 mr-2 rounded-2xl">HTML</p>
              <p className="bg-blue-500 text-white text-[13px] px-4 py-1 mr-2 rounded-2xl">CSS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">JavaScript</p>
            </div>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">React</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">TailWindCSS</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
          min-h-[15vh] flex flex-col md:flex-row border-l-[1px] rounded-md border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 items-start pl-3 md:pl-0
          animate__animated animate__fadeInUp animate__delay-1s
          lg:hover:bg-blue-500 lg:hover:text-white lg:hover:p-4
          transition-all duration-300
        ">

          <a href="https://guardianhr.com/" target="_blank" className="text-md text-blue-300 flex flex-row md:flex-col w-full md:w-1/4">
            <p className="text-sm text-blue-400">Guardian HR</p>
            <BsArrowUpRight className="inline-block text-[15px] ml-2 mt-1" />
          </a>

          <div className="flex flex-col w-full md:w-3/4">
            {/* <h4 className="text-sm text-blue-400">Frontend</h4> */}
            <p className="text-sm mb-1 text-blue-300">
              Served as webmaster, managing the company&apos;s IT infrastructure and website, from redesigns to deployments and all in between, as well as providing technical support.
            </p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">HTML</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">CSS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">WordPress</p>
            </div>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">PHP</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
          min-h-[15vh] flex flex-col md:flex-row border-l-[1px] rounded-md border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 items-start pl-3 md:pl-0
          animate__animated animate__fadeInUp animate__delay-1s
          lg:hover:bg-blue-500 lg:hover:text-white lg:hover:p-4
          transition-all duration-300
        ">

          <a href="https://millticketcasting.com/" target="_blank" className="text-md text-blue-300 flex flex-row md:flex-col w-full md:w-1/4">
            <p className="text-sm text-blue-400">MillticketCasting</p>
            <BsArrowUpRight className="inline-block text-[15px] ml-2 mt-1" />
          </a>

          <div className="flex flex-col w-full md:w-3/4">
            {/* <h4 className="text-sm text-blue-400">Frontend</h4> */}
            <p className="text-sm mb-1 text-blue-300">
              Migrated the previous wordpress database to a new custom MySQL schema with zero loss of relevant data. Also implemented a new homepage.
            </p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">HTML</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">CSS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">SQL</p>
            </div>
            <div className="flex flex-row text-blue-400 mt-2 self-end"> 
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">NextJS</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
          min-h-[15vh] flex flex-col md:flex-row border-l-[1px] rounded-md border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 items-start pl-3 md:pl-0
          animate__animated animate__fadeInUp animate__delay-1s
          lg:hover:bg-blue-500 lg:hover:text-white lg:hover:p-4
          transition-all duration-300
        ">

          <a href="https://wara.app/" target="_blank" className="text-md text-blue-300 flex flex-row md:flex-col w-full md:w-1/4">
            <p className="text-sm text-blue-400">WARA</p>
            <BsArrowUpRight className="inline-block text-[15px] ml-2 mt-1" />
          </a>

          <div className="flex flex-col w-full md:w-3/4">
            {/* <h4 className="text-sm text-blue-400">Frontend</h4> */}
            <p className="text-sm mb-1 text-blue-300">
              An ecommerce website that specializes in selling multi-ethnic groceries from around the world.
              Contributed frontend and backend development, as well as database management.
            </p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">HTML</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">CSS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">NextJS</p>
            </div>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Laravel</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="
          min-h-[15vh] flex flex-col md:flex-row border-l-[1px] rounded-md border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 items-start pl-3 md:pl-0
          animate__animated animate__fadeInUp animate__delay-1s
          lg:hover:bg-blue-500 lg:hover:text-white lg:hover:p-4
          transition-all duration-300
        ">

          <a href="https://gobabeego.com/" target="_blank" className="text-md text-blue-300 flex flex-row md:flex-col w-full md:w-1/4">
            <p className="text-sm text-blue-400">Gobabeego</p>
            <BsArrowUpRight className="inline-block text-[15px] ml-2 mt-1" />
          </a>

          <div className="flex flex-col w-full md:w-3/4">
            {/* <h4 className="text-sm text-blue-400">Frontend</h4> */}
            <p className="text-sm mb-1 text-blue-300">
              An ecommerce website that specializes in selling baby clothes, accessories, and other baby-related products.
              Implemented requested UI changes as well as setting up online payments processing.
            </p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">WordPress</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Work;