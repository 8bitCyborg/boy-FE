import { BsBriefcase } from "react-icons/bs";

const Work = () => {
  return(
    <div id="projects" className="min-h-[100vh] p-5 text-blue-200">
      <div className="sticky top-0 p-1 py-2 w-full bg-black">
        <BsBriefcase className="text-md" />
      </div>
      <div className="flex flex-col justify-center items-end h-full p-1 md:p-10">
        <h3 className="sticky top-2">Highlighted Work</h3>
        <span className="h-[1px] w-10 ml-10 bg-white sticky top-8"></span>
        <p className="mt-10 text-left">
          In my time at Intelligent Campaign Hub and Uvact Technologies as well as individually,
          I have have been priviledged to work on a number of interesting projects, <br/> 
          some of which are highlighted below.
        </p>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="min-h-[25vh] flex flex-col md:flex-row border-l-[1px] border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 pl-3 items-start">
          <p className="text-sm capitalize text-blue-400 mb-2 md:w-[30%]">Jan - Mar 2021</p>
          <div className="flex flex-col">
            <h4 className="text-md text-blue-300">ManageMyFlock</h4>
            <p className="text-sm my-1 text-blue-300">
              A mobile app that lets you as a minister, 
              more effectively manage your church&apos;s congregation, 
              keeping you closer to them and vice versa.
            </p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">React Native</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Laravel</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="min-h-[25vh] flex flex-col md:flex-row border-l-[1px] border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 pl-3 items-start">
          <p className="text-sm capitalize text-blue-400 mb-2 md:w-[80%]">Jan - Oct 2018</p>
          <div className="flex flex-col">
            <h4 className="text-md text-blue-300">An Automated Admission System with Machine Learning</h4>
            <p className="text-sm my-1 text-blue-300">
              My final year project as part of requirements to obtain a computer science degree, 
              was a prototypical system that automates the admission process for universities (and schools in general) in order to reduce wait times, 
              labour and resultant backlogs, while ensuring a high level of accuracy in satisfying the school&apos;s specific admission requirements in terms of grades.
            </p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Python</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Scikit Learn</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Tkinter</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="min-h-[25vh] flex flex-col md:flex-row border-l-[1px] border-blue-500 md:border-l-0 md:mt-5 ml-[3.5px] pt-2 pb-4 pl-3 items-start">
          <p className="text-sm capitalize text-blue-400 mb-2 md:w-[30%]">Aug - Oct 2017</p>
          <div className="flex flex-col">
            <h4 className="text-md text-blue-300">SIMBI - IntellCHub</h4>
            <p className="text-sm my-1 text-blue-300">A prototype for a system that would make it easy to Nigerians to access emergency hotlines and access relevant country information.</p>
            <div className="flex flex-row text-blue-400 mt-2 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">HTML</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">CSS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">CouchCMS</p>
            </div>
          </div>
        </div>

        <span className="visible md:hidden h-2 w-2 rounded-full bg-blue-500 mt-6 self-start"></span>
        <div className="min-h-[25vh] flex flex-col md:flex-row border-l-[1px] border-blue-500 md:border-l-0  md:mt-5 ml-[3.5px] pt-2 pb-4 pl-3 items-start">
          <p className="text-sm capitalize text-blue-400 mb-2 md:w-[30%]">Aug - Oct 2017</p>
          <div className="flex flex-col">
            <h4 className="text-md text-blue-300">Discova NG - IntellCHub</h4>
            <p className="text-sm my-1 text-blue-300">Contributed frontend code to a temporary platform for individuals to showcase their talents and get discova&apos;d by agents, et cetera.</p>
            <div className="flex flex-row text-blue-400 mt-4 self-end">
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">HTML</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">CSS</p>
              <p className="bg-blue-500 text-white text-sm px-4 py-1 mr-2 rounded-2xl">Javascript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;