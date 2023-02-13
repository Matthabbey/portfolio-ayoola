import React, { useEffect, useState } from "react";
import Logo from "../public/Logo.svg";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };
  return (
    <div>
      <nav className="py-4 ml-10 flex justify-between cursor-pointer">
        <div>
          <img src={Logo} alt="" className="h-5 w-10" />
          <h1 className="text-textColor">Ayoola</h1>
        </div>

        <ul className="flex justify-around items-center">

        <div className="flex items-center space-x-5 px-9 cursor-pointer">
          <li>Home</li>
          <li>Skills</li>
          <li className="bg-bgColor py-1 px-2 rounded-md">Resume</li>
          <li>Contact</li>
        </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
