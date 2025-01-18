import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="py-8 bg-[#02071D]">
      <div className="w-[90%] mx-auto lg:flex md:flex justify-between hidden font-dmsans">
        <img src={logo} alt="" className="w-[235px] h-[43px]" />
        <nav>
          <NavLink
            to="/"
            className="text-white hover:text-[#8BB9FF] hover:font-[700] mr-10 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="text-white hover:text-[#8BB9FF] hover:font-[700] mr-10 text-[18px]"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/deploy_token"
            className="text-white  hover:text-[#8BB9FF] hover:font-[700] text-[18px]"
          >
            Deploy Token
          </NavLink>
        </nav>
      
      </div>
      <div className="w-[95%] mx-auto flex justify-between lg:hidden md:hidden relative font-dmsans">
        <img src={logo} alt="" className="w-[185px] h-[43px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} color="#ffffff" direction="right" />
        {isOpen && (<nav className="flex flex-col bg-[#02071D] p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
          <NavLink
            to="/"
            className="text-white hover:text-[#8BB9FF] hover:font-[700] mb-6 text-[18px]"
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="text-white hover:text-[#8BB9FF] hover:font-[700] mb-6 text-[18px]"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/deploy_token"
            className="text-white hover:text-[#8BB9FF] hover:font-[700] mb-6 text-[18px]"
          >
            Deploy token
          </NavLink>
          <div className="mt-6">

          </div>
        </nav>)}
      </div>
    </header>
  );
};

export default Header;
