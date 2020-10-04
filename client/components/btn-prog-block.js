import React from 'react'

const BtnProgAndBlock = ({ text, setNewStatus, index }) => {
  const patchStatus = () => {
    const newStatus = {
      index,
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
