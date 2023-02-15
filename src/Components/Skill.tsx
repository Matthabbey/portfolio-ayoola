import React from "react";
import CodeLogo from '../public/CodeIcon.svg'
import ProjectLogo from '../public/ProjectsIcon.svg'
import DesignLogo from '../public/DesignIcon.svg'

const Skill = () => {
  return (
    <div className=" justify-center">
      <hr className="h-px my-8 border-0 dark:bg-gray-900" />
      <h1 className="text-3xl py-2 items-center text-center text-bgColor ">Skill Set</h1>
      <p className="text-sm py-4 leading-6 text-center px-[30%] text-lightOverlay pb-10 font-thin">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum
        obcaecati ducimus, deleniti vel iure impedit ullam laboriosam incidunt
        aut sunt placeat cum, voluptatibus commodi! Accusantium praesentium
        beatae eius. Harum.
      </p>

      <div className="">
        <div className=" flex justify-center gap-20 items-center mb-8">
          <div className="border border-bgShadow p-8 flex flex-col  items-center rounded-md max-auto">
            <img src={CodeLogo} alt="" className="w-12 h-12"/>
            <p className="text-lightOverlay text-sm font-thin">Over 2years</p>
            <p className="text-sm font-thin">Programmer</p>
          </div>
          <div className="border border-bgShadow p-8 flex flex-col rounded-md items-center text-center">
            <img src={ProjectLogo} alt="" className="w-12 h-12" />
            <p className="text-lightOverlay text-sm font-thin">Over 2years</p>
            <p className="text-sm font-thin">Programmer</p>
          </div>
          <div className="border border-bgShadow p-8 rounded-md flex flex-col items-center justify-center text-center ">
            <img src={DesignLogo} alt=""  className="w-12 h-12"/>
            <p className="text-lightOverlay text-sm font-thin">Over 2years</p>
            <p className="text-sm font-thin">Programmer</p>
          </div>
        </div>
        <div className=" justify-center border border-bgShadow gap-[90px] p-0 flex w-[50%] mx-[auto] rounded-md">
          <div>
            <p className="text-center text-lightOverlay text-sm font-thin">Developer</p>
            <p className="text-bgColor text-center text-sm font-thin">Full-Stack Developer</p>
          </div>
          <div>
            <p className="text-center text-lightOverlay text-sm font-thin">Developer</p>
            <p className="text-bgColor text-center text-sm font-thin">Full-Stack Developer</p>
          </div>
          <div>
            <p className="text-center text-lightOverlay text-sm font-thin">Developer</p>
            <p className="text-bgColor text-center text-sm font-thin">Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
