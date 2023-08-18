import React from "react";
import Select from "react-select";

const TodoFilter = ({ filterHandler }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "completed", label: "completed" },
    { value: "unCompleted", label: "unCompleted" },
  ];

  return (
    <div className="px-7">
      <div className="flex items-center justify-between">
        <p className="text-sm">Filter :</p>
        <div className="w-[52%] md:w-[20%]">
          <Select
            options={options}
            inputProps={{ readOnly: true }}
            isSearchable={false}
            onChange={filterHandler}
            styles={{
              control: (base, state) => ({
                ...base,
                borderRadius: "10px",
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoFilter;
