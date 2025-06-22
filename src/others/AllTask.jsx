const AllTask = () => {
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="bg-red-400 mb-2 py-2 px-4 grid grid-cols-5 gap-2 rounded text-center">
          <h2 className="text-sm sm:text-base font-medium">Employee Name</h2>
          <h3 className="text-sm sm:text-base font-medium">New Task</h3>
          <h5 className="text-sm sm:text-base font-medium">Active Task</h5>
          <h5 className="text-sm sm:text-base font-medium">Completed</h5>
          <h5 className="text-sm sm:text-base font-medium">Failed</h5>
        </div>

        <div className="border-2 border-emerald-500 mb-2 py-2 px-4 grid grid-cols-5 gap-2 rounded text-center">
          <h2 className="text-sm sm:text-base font-medium text-white">Krunal W</h2>
          <h3 className="text-sm sm:text-base font-medium text-blue-400">5</h3>
          <h5 className="text-sm sm:text-base font-medium text-yellow-400">2</h5>
          <h5 className="text-sm sm:text-base font-medium text-white">0</h5>
          <h5 className="text-sm sm:text-base font-medium text-red-600">0</h5>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
