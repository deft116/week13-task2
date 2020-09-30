import React from 'react'
import axios from 'axios'

const BtnStatus = ({ status, index }) => {
  const testStatus = () => {
    const newStatus = {
      status,
      index
    }
    axios.patch(`/api/v1/tasks/:category/:id`, newStatus)
  }
  return (
    <button
      type="button"
      className="mx-2 px-3 py-1 bg-gray-800 rounded-md text-sm font-medium leading-5 text-white"
      onClick={testStatus}
    >
      {' '}
      {status}{' '}
    </button>
  )
}

BtnStatus.propTypes = {}

export default React.memo(BtnStatus)
