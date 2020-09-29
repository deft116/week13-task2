import React, { useState } from 'react'
import axios from 'axios'

const InputTask = ({ setNewTask }) => {
  const [value, setValue] = useState({})
  const onChange = (event) => {
    setValue({
      title: event.target.value
    })
  }
  const getNewTask = () => {
    setNewTask(value)
    axios.post('http://localhost:8087/api/v1/tasks/:category', value)
    setValue('')
  }

  return (
    <div className="flex justify-center my-10 px-2">
      <input
        type="text"
        className="mx-2 px-3 py-1 w-1/3 border-solid border-2 border-gray-800 rounded-md text-sm font-medium leading-5 text-grey-800"
        value={value.title}
        onChange={onChange}
      />
      <button
        type="button"
        className="mx-2 px-3 py-1 bg-gray-800 rounded-md text-sm font-medium leading-5 text-white"
        onClick={getNewTask}
      >
        {' '}
        new task{' '}
      </button>
    </div>
  )
}

InputTask.propTypes = {}

export default React.memo(InputTask)
