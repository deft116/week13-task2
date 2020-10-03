import React from 'react'
import BtnProgAndBlock from './btn-prog-block'
import BtnDone from './btn-done'
// import BtnEdit from './btn-edit'

const Task = ({ allTasks, setAllTasks, setNewStatus }) => {
  const text = 'in progress'
  console.log(setAllTasks)
  return allTasks.map((item) => {
    return (
      <div className="flex justify-center my-2 px-2" key={item.taskId}>
        <div className="px-3 py-1 w-1/5 bg-gray-100 border-solid border-2 border-gray-800 rounded-md text-sm font-medium leading-5 text-grey-800">
          {item.title}
        </div>
        <BtnProgAndBlock text={text} setNewStatus={setNewStatus} taskId={item.taskId} />
        <BtnDone setNewStatus={setNewStatus} taskId={item.taskId} />
      </div>
    )
  })
}

Task.propTypes = {}

export default React.memo(Task)
