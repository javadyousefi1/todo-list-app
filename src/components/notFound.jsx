import react from "react";
import notFonund from "../image/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="md:w-[30%]">
          <img src={notFonund} className="" />
        </div>
      </div>
      <h1 className="text-[#2563eb] font-bold text-center text-2xl">
        Your page is not Found
      </h1>
      <Link to="/">
        <p className="mt-4 text-sm font-bold text-center text-slate-800">
          back to home
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
