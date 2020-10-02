import React from 'react'
import axios from 'axios'

const BtnStatus = ({ status, setAllTasks, index }) => {
  const changeStatus = (e) => {
    const newStatus = {
      newStatus: e.target.innerHTML,
      index
    }
    axios.patch(`/api/v1/tasks/:category/:id`, newStatus).then((res) => setAllTasks(res.data))
  }
  console.log(status)
  return (
    <button
      type="button"
      className="mx-2 px-3 py-1 bg-gray-800 rounded-md text-sm font-medium leading-5 text-white"
      onClick={changeStatus}
    >
      {status}
    </button>
  )
}

BtnStatus.propTypes = {}

export default React.memo(BtnStatus)
