import React, { useEffect, useState } from "react";
import BottomNav from "./bottomNavigation";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";

Chart.register(Tooltip, Title, ArcElement, Legend);

const ChartPage = () => {
  const [local, setLocal] = useState([]);
  const [taskData, setTaskData] = useState({
    all: null,
    completed: null,
    unCompleted: null,
  });

  useEffect(() => {
    createChartData();
  }, []);

  const createChartData = () => {
    const getLocal = JSON.parse(localStorage.getItem("todo"));
    let all = getLocal.length;
    let complete = 0;
    let uncomplete = 0;

    getLocal.forEach((item) => {
      if (item.isComplete) {
        complete = complete + 1;
      } else if (item.isComplete === false) {
        uncomplete = uncomplete + 1;
      }
    });

    setTaskData({
      all: all,
      completed: complete,
      unCompleted: uncomplete,
    });
    setLocal(getLocal);
  };

  const data = {
    datasets: [
      {
        data: [taskData.all, taskData.completed, taskData.unCompleted],
        backgroundColor: ["#2563eb", "#16a34a", "#dc2626"],
        hoverOffset: 4,
      },
    ],
    options: {
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            marginBottom: "50px",
          },
        },
      },
    },

    labels: ["All", "Completed", "unCompleted"],
  };

  return (
    <div>
      <div className="container px-7">
        <div className="bg-gray-200 h-[2px] w-full mt-2"></div>

        <div className="flex flex-col w-full md:flex-row md:justify-between">
          <div>
            <h1 className="mt-4 text-2xl font-bold text-left text-blue-500 md:mt-20 md:text-4xl">
              Task Chart
            </h1>

            <p className="mt-2 text-sm text-justify text-slate-800 md:text-xl lg:text-2xl">
              In this section, you can statistically check the process of doing
              your work with the categories of all, done and not done . You can
              read more details by hovering on the data chart and also according
              to the top guide of the chart you can check your apps .
            </p>

            <Link to="/task">
              <button className="hidden px-5 py-2 text-white bg-blue-500 shadow-md cursor-pointer rounded-xl mt-9 md:inline">
                Go to tasks
              </button>
            </Link>
          </div>

          <div className="flex justify-center float-right w-full md:block">
            <div className="md:w-[300px] lg:w-[450px] flex justify-center w-[300px] mt-5 md:block float-right ">
              <Pie data={data} />
              <div className="justify-center hidden w-full md:flex">
                {local.length === 0 && (
                  <div className="flex justify-center w-full">
                    <h1 className="absolute z-10 mt-4 text-center top-[300px]">
                      add some Task to show chart..
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {local.length === 0 && (
          <div className="flex justify-center md:hidden">
            <h1 className="absolute z-10 mt-4 text-center top-[300px]">
              add some Task to show chart..
            </h1>
          </div>
        )}
      </div>
      <BottomNav home={false} about={false} task={false} calendar={true} />
    </div>
  );
};

export default ChartPage;
