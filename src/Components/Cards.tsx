import React from "react";
import ProfileLogo from "../public/favicon_io/ProfilePic.png";

const Cards = () => {
  return (
    <div>
      <hr className="h-px my-8 border-0 dark:bg-gray-900 mt-10" />

      <div className="gap-[20px] flex mt-[5%]">
        <img src={ProfileLogo} alt="" className="w-5/9" />

        <div>
          <h4 className="border ">About me!</h4>
          <h1>Akinpelu Abiodun MAtthew</h1>
          <p className="[content:'\1F44B'] text-sm font-thin ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad
            obcaecati inventore natus sed repudiandae temporibus, dignissimos
            maxime delectus suscipit consequatur sequi magni laboriosam,
            deserunt dolores debitis itaque numquam illum.
          </p>
          <p className="text-sm font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad
            obcaecati inventore natus sed repudiandae temporibus, dignissimos
            maxime delectus suscipit consequatur sequi magni laboriosam,
            deserunt dolores debitis itaque numquam illum.
          </p>{" "}
          <p className="text-sm font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad
            obcaecati inventore natus sed repudiandae temporibus, dignissimos
            maxime delectus suscipit consequatur sequi magni laboriosam,
            deserunt dolores debitis itaque numquam illum.
          </p>{" "}
          <p className="text-sm font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad
            obcaecati inventore natus sed repudiandae temporibus, dignissimos
            maxime delectus suscipit consequatur sequi magni laboriosam,
            deserunt dolores debitis itaque numquam illum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
