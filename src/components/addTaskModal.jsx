import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const AddTaskModal = ({ addTodoHandler, closeModal }) => {
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    date: null,
    isComplete: false,
  });

  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.title) {
      toast.error("complete feilds !");
      return;
    }

    toast.success("Task Successfully added!", {
      style: {
        fontSize: "15px",
      },
    });

    addTodoHandler(formData);

    setFormData({
      id: null,
      title: "",
      date: null,
      isComplete: false,
    });

    closeModal();
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-[100vh] fixed top-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white w-[90%] rounded-lg py-4 px-4 md:w-[30%]">
        <h1 className="ml-1 text-lg text-blue-500">Add Todo</h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            ref={input}
            onChange={(e) => changeHandler(e)}
            name="title"
            type="text"
            placeholder="Enter your task title"
            className="rounded-[8px] w-full mt-4 bg-transparent "
          />
          <input
            type="submit"
            placeholder="Enter your task title"
            className="rounded-[8px]  mt-4 bg-blue-500 text-white p-2 resize-none px-4 float-right cursor-pointer"
          />
          <button
            onClick={closeModal}
            type="button"
            className="rounded-[8px]  mt-4 text-blue-500  p-2 resize-none px-4 float-right cursor-pointer"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
