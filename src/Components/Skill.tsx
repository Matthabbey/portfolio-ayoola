import React from "react";
import CodeLogo from '../public/CodeIcon.svg'
import ProjectLogo from '../public/ProjectsIcon.svg'
import DesignLogo from '../public/DesignIcon.svg'

const Skill = () => {
  return (
    <div className=" justify-center">
      <hr className="h-px my-8 border-0 dark:bg-gray-900" />
      <h1 className="text-3xl py-2 items-center text-center">Skill Set</h1>
      <p className="text-md py-2 leading-6 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum
        obcaecati ducimus, deleniti vel iure impedit ullam laboriosam incidunt
        aut sunt placeat cum, voluptatibus commodi! Accusantium praesentium
        beatae eius. Harum.
      </p>

      <div className="">
        <div className="">
          <div className="border border-bgShadow p-8 rounded-md max-auto">
            <img src={CodeLogo} alt="" className="w-12 h-12"/>
            <p className="text-lightOverlay text-sm">Over 2years</p>
            <h3>Programmer</h3>
          </div>
          <div className="border border-bgShadow p-8 rounded-md items-center text-center">
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
        <div className=" justify-center border border-bgShadow gap-16 p-1 flex w-[80%] mx-[auto]">
          <div>
            <p className="text-center text-sm">Developer</p>
            <h3 className="text-bgColor text-center">Full-Stack Developer</h3>
          </div>
          <div>
            <p className="text-center">Developer</p>
            <h3 className="text-bgColor text-center">Full-Stack Developer</h3>
          </div>
          <div>
            <p className="text-center">Developer</p>
            <h3 className="text-bgColor text-center">Full-Stack Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
