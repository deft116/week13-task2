import React from 'react'

const BtnDone = ({ status, setNewStatus, setDeleteTask, taskId }) => {
  let text = ''
  if (status === 'in progress') {
    text = 'done'
  } else {
    text = 'delete'
  }
  const patchStatus = () => {
    if (text === 'done') {
      const newStatus = {
        taskId,
        newStatus: 'done'
      }
      setNewStatus(newStatus)
    } else {
      setDeleteTask({ taskId })
    }
  }
  return (
    <button
      type="button"
      className="mx-2 px-3 py-1 bg-gray-800 rounded-md text-sm font-medium leading-5 text-white"
      onClick={patchStatus}
    >
      {text}
    </button>
  )
}

BtnDone.propTypes = {}

export default React.memo(BtnDone)
