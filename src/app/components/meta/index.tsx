import About from "./about";
import Experience from "./experience";
import Work from "./work";

const Meta = () => {
  return(
    <section className="min-h-[100vh] w-[100vw] mt-[100vh] bg-black z-40 flex flex-row">
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
        <About />
        <Experience />
        <Work />
      </div>

    </section>
  )
};

export default Meta;