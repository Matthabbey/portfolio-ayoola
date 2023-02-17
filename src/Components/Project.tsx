import React from "react";
import CodeLogo from "../public/CodeIcon.svg";
import ProjectLogo from "../public/ProjectsIcon.svg";
import DesignLogo from "../public/DesignIcon.svg";
import ProjectImg from "../public/image.png"

const Project = () => {
  return (
    <div>
      <h1 className="ml-[5%] mb-4 border border-bgShadow w-[7%] text-center rounded-md text-cardOverlay">Portfolio</h1>
      <div className="flex justify-between pr-[5%]">
        <p className="pl-[5%] font-extrabold">List of Projects Completed</p>
        <div className="flex gap-5">
          <div className="border border-bgShadow w-[70%] h-[55%] px-0 flex text-center gap-2 rounded-md">
            <img src={DesignLogo} alt="" width={40}/>
            <button className="pt-1 text-cardOverlay">UI Design</button>
          </div>
          {/* <div className="border border-bgShadow w-[65%] h-[55%] px-0 flex text-center gap-2 rounded-md">
            <img src={ProjectLogo} alt="" width={35} />
            <button className="pt-1 text-cardOverlay">UI Design</button>
          </div> */}
          <div className="border border-bgShadow w-[75%] h-[55%] px-1 flex text-center gap-2 rounded-md">
            <img src={CodeLogo} alt="" width={35}/>
            <button className="pt-1 text-cardOverlay">UI Design</button>
          </div>
        </div>
      </div>

      <div className="px-[7%] py-[3%] gap-5 grid grid-cols-4">
        <div className="border border-bgShadow w-[100%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className=" bg-green-800 w-[30%] text-center font-sans py-0 px-0 rounded-md text-white">
              Online
            </button>
            <button className="border border-bgColor w-[45%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript 
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
        <div>
        <div className="border border-bgShadow w-[100%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-0 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[45%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
      </div>
      <div>
        <div className="border border-bgShadow w-[100%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-0 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[45%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
      </div>
      <div>
        <div className="border border-bgShadow w-[100%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-2 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[45%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
      </div>
      <div className="border border-bgShadow w-[100%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-0 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[45%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
        <div>
        <div className="border border-bgShadow w-[100%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-0 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[45%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
      </div>
      <div>
        <div className="border border-bgShadow w-[100%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-0 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[45%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
      </div>
      <div>
        <div className="border border-bgShadow w-[100%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-2 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[45%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
      </div>
      </div>
      
      <hr className="h-px my-8 border-0 dark:bg-gray-900 mt-10" />

    </div>
  );
};

export default Project;
