import BottomNav from "./bottomNavigation";
import Tailwind from "../image/tailwind.png";
import Html from "../image/html.png";
import css from "../image/css.png";
import react from "../image/react.png";
import js from "../image/js.jpg";
import chart from "../image/chart.png";
import route from "../image/route.png";
import about from "../image/about.png";

const About = () => {
  return (
    <div className="container">
      <div className=" px-7">
        <div className="bg-gray-200 h-[2px] w-full mt-2"></div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="md:w-[60%]">
          <div className="mb-6 px-7 ">
            <h1 className="mt-5 text-2xl font-bold text-left text-blue-500 md:text-4xl">
              About App
            </h1>

            <p className="mt-2 text-sm text-justify text-slate-800 md:text-xl lg:text-2xl">
              we create Todo app with using React js and Tailwind and the pages
              are SPA (single page application) and tasks data save in local
              storage of browser.You can add edit delete and manage your Tasks.i
              hope enjoy with Todo List web App ;)
            </p>
          </div>

          <div>
            <img
              src={Html}
              className="w-[40px] inline-block mr-2 ml-6"
              alt="html"
            />
            <img src={css} className="w-[40px] inline-block mr-2" alt="css" />
            <img src={js} className="w-[35px] inline-block mr-2" alt="js" />
            <img
              src={Tailwind}
              className="w-[40px] inline-block mr-2"
              alt="Tailwind"
            />
            <img
              src={react}
              className="w-[35px] inline-block mr-2"
              alt="react"
            />
            <img
              src={chart}
              className="w-[42px] inline-block mr-2"
              alt="chart"
            />
            <img
              src={route}
              className="w-[42px] inline-block mr-2"
              alt="route"
            />
          </div>

          <a href="https://javadyousefi.com">
            <button className="block px-5 py-2 ml-8 text-white bg-blue-500 shadow-md cursor-pointer rounded-xl mt-9">
              visit my website
            </button>
          </a>
        </div>
        <div className="w-[40%]  items-center justify-end hidden md:flex">
          <img src={about} className="w-[400px] inline-block " alt="about" />
        </div>
      </div>
      <BottomNav home={false} about={true} task={false} calendar={false} />
    </div>
  );
};

export default About;
