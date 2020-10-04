import React from 'react'
import BtnProgAndBlock from './btn-prog-block'
import BtnDone from './btn-done'
// import BtnEdit from './btn-edit'

const Task = ({ allTasks, setNewStatus, setDeleteTask }) => {
  return allTasks
    .filter((item) => !item.isDeleted)
    .map((item, index) => {
      return (
        <div className="flex justify-center my-2 px-2" key={item.taskId}>
          <div className="px-3 py-1 w-1/5 bg-gray-100 border-solid border-2 border-gray-800 rounded-md text-sm font-medium leading-5 text-grey-800">
            <p>Status: {item.status}</p>
            {item.title}
          </div>
          {item.status === 'done' ? null : (
            <BtnProgAndBlock
              status={item.status}
              setNewStatus={setNewStatus}
              index={index}
              taskId={item.taskId}
            />
          )}
          {item.status === 'in progress' || item.status === 'done' ? (
            <BtnDone
              status={item.status}
              setNewStatus={setNewStatus}
              index={index}
              setDeleteTask={setDeleteTask}
              taskId={item.taskId}
            />
          ) : null}
        </div>
      )
    })
}

Task.propTypes = {}

export default React.memo(Task)
