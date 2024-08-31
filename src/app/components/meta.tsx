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

      <div className="w-[100vw] md:w-[60vw]">
        <div id="about" className="h-[100vh] bg-black p-5">
          <h3 className="sticky top-0">Me</h3>
          <div className="flex justify-center items-center h-full">
            I am a SWE...
          </div>
        </div>

        <div id="experience" className="sticky top-0 md:relative h-[100vh] bg-black p-5">
          <h3 className="sticky top-0">Experience</h3>
          <div className="flex justify-center items-center h-full">
            I have x years of experience...
          </div>
        </div>

        <div id="projects" className="sticky top-0 md:relative h-[100vh] bg-black p-5">
          <h3 className="sticky top-0">Projects</h3>
          <div className="flex justify-center items-center h-full">
            I have worked on...
          </div>
        </div>
      </div>

    </section>
  )
};

export default Meta;