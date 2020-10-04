import React from 'react'

const BtnProgAndBlock = ({ status, setNewStatus, taskId }) => {
  let text = ''
  if (status === 'new' || status === 'blocked') {
    text = 'in progress'
  } else {
    text = 'blocked'
  }
  const patchStatus = () => {
    const newStatus = {
      taskId,
      newStatus: text
    }
    setNewStatus(newStatus)
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

BtnProgAndBlock.propTypes = {}

export default React.memo(BtnProgAndBlock)
