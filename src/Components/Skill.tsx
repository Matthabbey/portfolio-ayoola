import React from "react";
import CodeLogo from '../public/CodeIcon.svg'

const Skill = () => {
  return (
    <div className=" justify-center">
      <hr className="h-px my-8 border-0 dark:bg-gray-900" />
      <h1 className="text-3xl py-2 items-center text-center">Skill Set</h1>
      <p className="text-md py-2 leading-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum
        obcaecati ducimus, deleniti vel iure impedit ullam laboriosam incidunt
        aut sunt placeat cum, voluptatibus commodi! Accusantium praesentium
        beatae eius. Harum.
      </p>

      <div className="justify-center">
        <div className="flex py-5 justify-center gap-16">
          <div className="border border-bgShadow p-8 rounded-md items-center text-center">
            <img src={CodeLogo} alt="" className="w-12 h-12 items-center justify-center"/>
            <p className="text-lightOverlay text-sm">Over 2years</p>
            <h3>Programmer</h3>
          </div>
          <div>
            <img src="" alt="" />
            <p>Over 2years</p>
            <h3>Programmer</h3>
          </div>
          <div>
            <img src="" alt="" />
            <p>Over 2years</p>
            <h3>Programmer</h3>
          </div>
        </div>
        <div className="flex justify-center gap-16 border bg-bgbackGround">
          <div>
            <span>Developer</span>
            <h3>Full-Stack Developer</h3>
          </div>
          <div>
            <span>Developer</span>
            <h3>Full-Stack Developer</h3>
          </div>
          <div>
            <span>Developer</span>
            <h3>Full-Stack Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
