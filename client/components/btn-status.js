import React from 'react'

const BtnStatus = ({ status }) => {
  return (
    <button
      type="button"
      className="mx-2 px-3 py-1 bg-gray-800 rounded-md text-sm font-medium leading-5 text-white"
    >
      {' '}
      {status}{' '}
    </button>
  )
}

BtnStatus.propTypes = {}

export default React.memo(BtnStatus)
