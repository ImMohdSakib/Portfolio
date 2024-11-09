import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 fade-in">
      <span className="text-xl font-bold tracking-wide"><a href="/"> Mohd Sakib. </a></span>

      <ul
        className={`${
          menu ? "block w-full space-y-2" : "hidden"
        } py-2 mt-4 font-semibold md:mt-5 bg-black px-4 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex md:space-y-0 md:gap-6`}
      >
        <li>
          <a href="#About" className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </a>
        </li>
        <li>
          <a href="#Experience" className="text-md transition-all duration-300 p-1 md:p-0">
            Skills
          </a>
        </li>
        <li>
          <a href="#Projects" className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </a>
        </li>
        <li>
          <a href="#Footer" className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </a>
        </li>
      </ul>

      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => openMenu(!menu)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => openMenu(!menu)}
        />
      )}
    </nav>
  );
};

export default Navbar;
