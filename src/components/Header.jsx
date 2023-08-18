import { FaCheck, FaSearch, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="container">
      <div className="w-full py-4 my-2 px-7">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-x-2">
            <div className="h-7 w-7 bg-[#2563EB] rounded-full flex items-center justify-center">
              <FaCheck style={{ color: "#fff", fontSize: "12px" }} />
            </div>
            <h1 className="text-xs text-[#2563EB] font-bold">ToDo</h1>
          </div>

          <div className="flex items-center">
            <ul className="hidden mr-10 gap-x-6 md:flex">
              <Link to="/">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link to="/task">
                <li className="cursor-pointer">Task</li>
              </Link>
              <Link to="/chart">
                <li className="cursor-pointer">Chart</li>
              </Link>
              <Link to="/about">
                <li className="cursor-pointer">About</li>
              </Link>
            </ul>

            <div className="flex items-center justify-center p-1 bg-blue-100 border border-blue-500 rounded-md w-7 h-7">
              <FaUser style={{ color: "#2563EB" }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
