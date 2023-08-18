import React from "react";
import { FaBookmark, FaCheck, FaTrash } from "react-icons/fa";

const TaskStyle = ({ id, title, date, isComplete, onComplete, onDelete }) => {
  return (
    <div className=" px-7">
      <div className="w-full border border-[#ccc] rounded-lg mt-4 py-4 px-5">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center justify-start">
            <FaBookmark style={{ color: "#2563eb" }} />
            <div className="flex flex-col ml-5 gap-y-1">
              <p className="text-sm">{title}</p>
              <span className="text-xs text-gray-400">{date}</span>
            </div>
          </div>
          <div
            className={isComplete ? "text-[#2563eb] flex" : "text-[#ccc] flex"}
          >
            <div className="flex items-center mr-5">
              <FaTrash
                onClick={() => onDelete(id)}
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
            </div>
            <FaCheck
              onClick={() => onComplete(id)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskStyle;
