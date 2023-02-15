import React from "react";
import CodeLogo from "../public/CodeIcon.svg";
import ProjectLogo from "../public/ProjectsIcon.svg";
import DesignLogo from "../public/DesignIcon.svg";
import ProjectImg from "../public/image.png"

const Project = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <p>List of Projects Completed</p>
        <div>
          <div>
            <img src={DesignLogo} alt="" />
            <span>UI Design</span>
          </div>
          <div>
            <img src={ProjectLogo} alt="" />
            <span>UI Design</span>
          </div>
          <div>
            <img src={CodeLogo} alt="" />
            <span>UI Design</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-center ">
        <div className="border border-bgShadow w-[30%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in, voluptatem praesentium sint mollitia
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-0 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[40%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
        <div>
        <div className="border border-bgShadow w-[30%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in, voluptatem praesentium sint mollitia
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-0 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[40%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
      </div>
      <div>
        <div className="border border-bgShadow w-[30%] px-8 rounded-md py-5">
          <p className="font-extrabold pb-2">Move.it</p>
          <p className="text-cardOverlay pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            nemo. Odit in, voluptatem praesentium sint mollitia
          </p>
          <div className="flex py-5 gap-2 mb-0">
            <button className="border border-bgColor w-[30%] text-center py-0 px-0 rounded-md text-cardOverlay">
              Online
            </button>
            <button className="border border-bgColor w-[40%] text-center py- px- rounded-md text-cardOverlay">
              TypeScript
            </button>
          </div>
            <img src={ProjectImg} alt="" className="" />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Project;
