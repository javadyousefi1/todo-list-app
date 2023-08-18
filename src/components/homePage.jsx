import TodoImage from "../image/Todo-min.png";
import { Link } from "react-router-dom";
import BottomNav from "../components/bottomNavigation";

const HomePage = () => {
  return (
    <div>
      <div className="container mb-5 px-7">
        <div className="bg-gray-200 h-[2px] w-full mt-2"></div>
      </div>
      <div className="flex items-center justify-center w-full px-7 md:px-5">
        <div className="flex flex-col items-center md:items-center gap-y-8">
          <div className="md:w-[200px] w-[250px] lg:w-[250px]  ">
            <img src={TodoImage} alt="todo"/>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-center text-blue-500 lg:text-3xl">
              Todo App
            </h1>

            <p className="mt-3 text-sm text-center text-slate-800 lg:text-lg md:text-md">
              welcome To my react app :)
              <br />
              You can register and manage your activities and programs in this
              program, my friend
              <br />i hope you enjoy it
            </p>

            <Link to="/task">
              <div className="flex justify-center">
                <button className="text-white rounded-[20px] mt-7 p-2 bg-blue-500 w-[100px] shadow-lg md:w-[200px] md:py-2">
                  Lets Go !
                </button>
              </div>
            </Link>
          </div>
        </div>
        <BottomNav home={true} about={false} task={false} calendar={false} />
      </div>
    </div>
  );
};

export default HomePage;
