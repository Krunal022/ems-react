import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='mt-10 grid grid-cols-2 gap-4'>
        
        <div className='rounded-lg py-4 px-6 bg-blue-400 shadow-md'>
            <h2 className='text-lg font-bold'>0</h2>
            <h3 className='text-sm mt-1 font-medium'>New Task</h3>
        </div>
        
        <div className='rounded-lg py-4 px-6 bg-green-400 shadow-md'>
            <h2 className='text-lg font-bold'>0</h2>
            <h3 className='text-sm mt-1 font-medium text-nowrap'>Completed Task</h3>
        </div>
        
        <div className='rounded-lg py-4 px-6 bg-yellow-400 shadow-md'>
            <h2 className='text-lg text-black font-bold'>0</h2>
            <h3 className='text-sm mt-1 text-black font-medium'>Accepted Task</h3>
        </div>
        
        <div className='rounded-lg py-4 px-6 bg-red-400 shadow-md'>
            <h2 className='text-lg font-bold'>0</h2>
            <h3 className='text-sm mt-1 font-medium'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers
