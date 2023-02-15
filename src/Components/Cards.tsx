import React from "react";
import ProfileLogo from "../public/favicon_io/ProfilePic.png";

const Cards = () => {
  return (
    <div>
      <hr className="h-px my-8 border-0 dark:bg-gray-900 mt-10" />

      <div className="gap-[90px] flex py-[2%] ml-[5%]">
        <img src={ProfileLogo} alt="" width={200} height={100} className="ml-[7%] py-10" />

        <div className="space-y-2 py-[3%] px-[10%] mr-[5%]">
          <h4 className="border border-bgColor py-1 px-2 rounded-md text-cardOverlay">About me!</h4>
          <h1 className="font-extrabold ">Akinpelu Abiodun Matthew</h1>
          <p className="[content:'\1F44B'] text-sm font-thin text-cardOverlay">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad
          </p>
          <p className="text-sm font-thin text-cardOverlay">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad
          </p>{" "}
          <p className="text-sm font-thin text-cardOverlay">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad
          </p>{" "}
          <p className="text-sm font-thin text-cardOverlay">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
