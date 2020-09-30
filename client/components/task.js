import React from 'react'
import BtnStatus from './btn-status'
// import BtnEdit from './btn-edit'

const Task = ({ allTasks }) => {
  return allTasks.map((item, index) => {
    return (
      <div className="flex justify-center my-2 px-2" key={item.taskId}>
        <div className="px-3 py-1 w-1/5 bg-gray-100 border-solid border-2 border-gray-800 rounded-md text-sm font-medium leading-5 text-grey-800">
          {item.title}
        </div>
        <BtnStatus status={item.status} index={index} />
      </div>
    )
  })
}

Task.propTypes = {}

export default React.memo(Task)
