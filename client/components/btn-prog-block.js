import React from 'react'

const BtnProgAndBlock = ({ text, setNewStatus, taskId }) => {
  return (
    <button
      type="button"
      className="mx-2 px-3 py-1 bg-gray-800 rounded-md text-sm font-medium leading-5 text-white"
      onClick={() =>
        setNewStatus({
          taskId,
          status: text
        })
      }
    >
      {text}
    </button>
  )
}

BtnProgAndBlock.propTypes = {}

export default React.memo(BtnProgAndBlock)
