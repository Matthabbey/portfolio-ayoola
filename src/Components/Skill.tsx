import React from "react";
import CodeLogo from '../public/CodeIcon.svg'
import ProjectLogo from '../public/ProjectsIcon.svg'
import DesignLogo from '../public/DesignIcon.svg'

const Skill = () => {
  return (
    <div className=" justify-center">
      <hr className="h-px my-8 border-0 dark:bg-gray-900" />
      <h1 className="text-3xl py-2 items-center text-center text-bgColor ">Skill Set</h1>
      <p className="text-sm py-4 leading-7 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum
        obcaecati ducimus, deleniti vel iure impedit ullam laboriosam incidunt
        aut sunt placeat cum, voluptatibus commodi! Accusantium praesentium
        beatae eius. Harum.
      </p>

      <div className="">
        <div className=" flex justify-center gap-20 items-center mb-8">
          <div className="border border-bgShadow p-8 flex flex-col  items-center rounded-md max-auto">
            <img src={CodeLogo} alt="" className="w-12 h-12"/>
            <p className="text-lightOverlay text-sm">Over 2years</p>
            <h3>Programmer</h3>
          </div>
          <div className="border border-bgShadow p-8 flex flex-col rounded-md items-center text-center">
            <img src={ProjectLogo} alt="" className="w-12 h-12" />
            <p className="text-lightOverlay text-sm">Over 2years</p>
            <h3>Programmer</h3>
          </div>
          <div className="border border-bgShadow p-8 rounded-md flex flex-col items-center justify-center text-center ">
            <img src={DesignLogo} alt=""  className="w-12 h-12"/>
            <p className="text-lightOverlay text-sm font-thin">Over 2years</p>
            <h3>Programmer</h3>
          </div>
        </div>
        <div className=" justify-center border border-bgShadow gap-16 p-0 flex w-[50%] mx-[auto] rounded-md">
          <div>
            <p className="text-center text-lightOverlay">Developer</p>
            <h3 className="text-bgColor text-center">Full-Stack Developer</h3>
          </div>
          <div>
            <p className="text-center text-lightOverlay">Developer</p>
            <h3 className="text-bgColor text-center">Full-Stack Developer</h3>
          </div>
          <div>
            <p className="text-center text-lightOverlay">Developer</p>
            <h3 className="text-bgColor text-center">Full-Stack Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
