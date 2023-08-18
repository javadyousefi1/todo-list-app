import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import TodoFilter from "../components/todoFilter";
import TaskStyle from "../components/taskStyle";
import AddTaskModal from "./addTaskModal";
import toast from "react-hot-toast";
import BottomNav from "../components/bottomNavigation";

const Task = () => {
  const [task, setTask] = useState([]);
  const [backupTask, setBackupTask] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.getItem("todo") ||
      localStorage.setItem("todo", JSON.stringify([]));

    const storage =
      JSON.parse(localStorage.getItem("todo")) ||
      localStorage.setItem("todo", JSON.stringify(task));
    setTask(storage);
    setBackupTask(task);
  }, []);

  useEffect(() => {
    setBackupTask(task);
    filterHandler({ value: filter });
    localStorage.setItem("todo", JSON.stringify(task));
  }, [task]);

  const addTodoHandler = (newTask) => {
    const momentDate = new Date().toLocaleString();
    setTask([
      ...task,
      { ...newTask, date: momentDate, id: Math.ceil(Math.random() * 1000) },
    ]);
  };

  const onComplete = (id) => {
    const cloneTask = [...task];
    const findItem = cloneTask.find((todo) => todo.id === id);
    findItem.isComplete = !findItem.isComplete;
    setTask(cloneTask);
    if (findItem.isComplete) {
      toast.success("Task Completed! 🥳");
    }
  };

  const filterHandler = (selected) => {
    setFilter(selected.value);

    if (selected.value === "completed") {
      const cloneTask = [...task];
      const filter = cloneTask.filter((item) => item.isComplete);
      setBackupTask(filter);
    } else if (selected.value === "unCompleted") {
      const cloneTask = [...task];
      const filter = cloneTask.filter((item) => !item.isComplete);
      setBackupTask(filter);
    } else {
      setBackupTask(task);
    }
  };

  const onDelete = (id) => {
    const cloneTask = [...task];
    const deleteItem = cloneTask.filter((d) => d.id !== id);
    setTask(deleteItem);
    toast("Task deleted!", {
      icon: " 🗑️ ",
      duration: 1500,
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="mb-6 px-7">
        <div className="bg-gray-200 h-[2px] w-full mt-"></div>
      </div>
      <TodoFilter filterHandler={filterHandler} />

      {showModal && (
        <AddTaskModal addTodoHandler={addTodoHandler} closeModal={closeModal} />
      )}

      <div className="w-full   mt-2 h-[calc(100vh-164px)]  overflow-y-scroll md:overflow-y-visible md:h-full md:mb-12 mb-20">
        {task.length > 0 ? (
          backupTask.map((t, index) => {
            return (
              <TaskStyle
                key={index}
                id={t.id}
                title={t.title}
                date={t.date}
                isComplete={t.isComplete}
                onComplete={onComplete}
                onDelete={onDelete}
              />
            );
          })
        ) : (
          <div className="flex justify-center">
            <h1 className="absolute text-center mt-44 -z-10">
              add some Task..
            </h1>
          </div>
        )}
      </div>

      <div className={showModal ? "relative -z-10" : "relative z-10"}>
        <div
          onClick={() => {
            setShowModal(!showModal);
          }}
          className="fixed bg-blue-500 bottom-[80px] left-[20px] p-3 rounded-full shadow-xl inline-block float-left md:p-4 md:bottom-[80px] md:left-[40px] cursor-pointer"
        >
          <FaPlus style={{ color: "#fff", fontSize: "20px" }} />
        </div>
      </div>

      <BottomNav home={false} about={false} task={true} calendar={false} />
    </div>
  );
};

export default Task;
