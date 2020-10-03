import React from 'react'

const BtnDone = ({ setNewStatus, taskId }) => {
  return (
    <button
      type="button"
      className="mx-2 px-3 py-1 bg-gray-800 rounded-md text-sm font-medium leading-5 text-white"
      onClick={() =>
        setNewStatus({
          taskId,
          status: 'done'
        })
      }
    >
      done
    </button>
  )
}

BtnDone.propTypes = {}

export default React.memo(BtnDone)
