import React from "react";
import HeadIcon from "../public/theHead.svg";
import { BsInstagram, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex gap-10 justify-center items-center text-cardOverlay">
      <div>
        <h1 className=" text-2xl px-0 text-white font-medium">
          Akinpelu Abiodun M.
        </h1>
        <p className="py-0">Full-Stack Developer </p>
        <div className="text-2xl flex gap-5 py-2 rounded w-50 h-50 cursor-pointer">
          <BsLinkedin onClick={()=>window.open("https://www.linkedin.com/in/abiodun-akinpelu-20147a176/")}
 />
          <BsGithub  onClick={() => window.open("https://github.com/matthabbey")}/>
          <BsInstagram />
        </div>
      </div>
      <img src={HeadIcon} alt="" width={600} height={500} />

      <div className="text-xl flex gap-2 items-center text-cardOverlay cursor-pointer rounded-lg border border-bgShadow p-2"    onClick={() =>
        window.open("https://api.whatsapp.com/send/?phone=08036202050")
      }>
        <BsWhatsapp className="text-green-800"/>
        <h3>Whatsapp!</h3>
      </div>
    </div>
  );
};

export default Home;
