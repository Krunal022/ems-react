import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // handle form submit logic here
    console.log({ taskTitle, taskDate, asignTo, category, taskDescription });
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row w-full items-start justify-between gap-6"
      >
        <div className="w-full md:w-1/2">
          <div>
            <label htmlFor="taskTitle" className="text-sm text-gray-300 mb-0.5 block">Task Title</label>
            <input
              id="taskTitle"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm text-white py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <label htmlFor="taskDate" className="text-sm  text-white mb-0.5 block">Date</label>
            <input
              id="taskDate"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm text-white py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <label htmlFor="asignTo" className="text-sm text-white mb-0.5 block">Assign To</label>
            <input
              id="asignTo"
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm text-white py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <label htmlFor="category" className="text-sm text-white mb-0.5 block">Category</label>
            <input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm text-white py-2 px-3 w-full rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-start">
          <label htmlFor="taskDescription" className="text-sm text-white mb-0.5">Description</label>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm text-white py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full transition duration-300"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;