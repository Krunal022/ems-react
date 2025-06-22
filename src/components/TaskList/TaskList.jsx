import React from 'react';

const TaskList = ({ data }) => {
  const cardColors = [
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-pink-400',
    'bg-purple-400',
    'bg-orange-400',
    'bg-red-400',
  ];

  return (
    <div
      id="tasklist"
      className="overflow-x-auto flex items-center justify-start gap-3 w-full py-4 mt-8"
    >
      {cardColors.map((color, index) => (
        <div
          key={index}
          className={`flex-shrink-0 w-[220px] p-3 ${color} rounded-lg shadow-md transition hover:scale-105`}
        >
          <div className="flex justify-between items-center">
            <h3 className="bg-white/80 text-[10px] px-2 py-1 rounded text-black font-semibold">
              Web
            </h3>
            <h4 className="text-[10px] text-black font-light">21 Jun 2023</h4>
          </div>
          <h2 className="mt-3 text-lg font-bold text-black">Add Task</h2>
          <p className="text-[11px] mt-1 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia voluptatem.
          </p>
          <div className="flex justify-between mt-3">
            <button className="bg-white text-black rounded-full font-semibold py-1 px-2 text-[10px]">
              Completed
            </button>
            <button className="bg-white text-black rounded-full font-semibold py-1 px-2 text-[10px]">
              Failed
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
