import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTasks, FaInfo, FaChartPie, FaCheck } from "react-icons/fa";

const BottomNav = ({ home, task, calendar, about }) => {
  const [selectedFilter, setSelectedFilter] = useState({
    home: home,
    task: task,
    calendar: calendar,
    about: about,
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 py-3 bg-white shadow-md px-7 md:px-0 md:py-0">
      <div className="flex items-center justify-between md:hidden">
        <Link to="/">
          <div
            onClick={() =>
              setSelectedFilter({
                home: true,
                task: false,
                calendar: false,
                about: false,
              })
            }
            className={
              selectedFilter.home
                ? "flex flex-col items-center gap-y-1 text-blue-500"
                : "flex flex-col items-center gap-y-1"
            }
          >
            <span className="text-lg">
              <FaHome />
            </span>
            <span className="mt-1 text-xs">Home</span>
          </div>
        </Link>

        <Link to="/task">
          <div
            onClick={() =>
              setSelectedFilter({
                home: false,
                task: true,
                calendar: false,
                about: false,
              })
            }
            className={
              selectedFilter.task
                ? "flex flex-col items-center gap-y-1 text-blue-500"
                : "flex flex-col items-center gap-y-1"
            }
          >
            <span className="text-lg">
              <FaTasks />
            </span>
            <span className="mt-1 text-xs">Tasks</span>
          </div>
        </Link>

        <Link to="/chart">
          <div
            onClick={() =>
              setSelectedFilter({
                home: false,
                task: false,
                calendar: true,
                about: false,
              })
            }
            className={
              selectedFilter.calendar
                ? "flex flex-col items-center gap-y-1 text-blue-500"
                : "flex flex-col items-center gap-y-1"
            }
          >
            <span className="text-lg">
              <FaChartPie />
            </span>
            <span className="mt-1 text-xs">chart</span>
          </div>
        </Link>
        <Link to="/about">
          <div
            onClick={() =>
              setSelectedFilter({
                home: false,
                task: false,
                calendar: false,
                about: true,
              })
            }
            className={
              selectedFilter.about
                ? "flex flex-col items-center gap-y-1 text-blue-500"
                : "flex flex-col items-center gap-y-1"
            }
          >
            <span className="text-lg">
              <FaInfo />
            </span>
            <span className="mt-1 text-xs">About</span>
          </div>
        </Link>
      </div>

      <div className="hidden px-4 py-2 bg-blue-500 md:block">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-x-2">
            <div className="h-5 w-5 bg-[#fff] rounded-full flex items-center justify-center">
              <FaCheck style={{ color: "#2563EB", fontSize: "8px" }} />
            </div>
            <h1 className="text-xs text-[#ffffff] font-bold">ToDo</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
