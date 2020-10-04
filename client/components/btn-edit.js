import React from 'react'

const BtnEdit = () => {
  return (
    <button
      type="button"
      className="mx-2 px-3 py-1 bg-gray-800 rounded-md text-sm font-medium leading-5 text-white"
    >
      edit
    </button>
  )
}

BtnEdit.propTypes = {}

export default React.memo(BtnEdit)
