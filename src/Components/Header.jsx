import React from "react";
import { FaBars } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-1.5 py-1.5 rounded-3xl">
          Hoster is hiring
        </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400">
        <li>
          <a href="a" className="px-6">Plans</a>
          <a href="a" className="px-6">Find Domain</a>
          <a href="a" className="px-6">Domain</a>
        </li>
      </ul>
      <div className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6">
        <a className="text-gray-400" href="a">
          Sing In
        </a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
          Join Waitlist
        </button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
