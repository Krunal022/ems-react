import React from 'react'
import Header from '../../others/Header';
import TaskListNumber from '../../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';
import AllTask from '../../others/AllTask';

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
