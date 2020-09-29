import React, { useState } from 'react'

const InputTask = ({ setNewTask }) => {
  const [value, setValue] = useState('0')
  const onChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="flex justify-center my-10 px-2">
      <input
        type="text"
        className="mx-2 px-3 py-1 w-1/3 border-solid border-2 border-gray-800 rounded-md text-sm font-medium leading-5 text-grey-800"
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="mx-2 px-3 py-1 bg-gray-800 rounded-md text-sm font-medium leading-5 text-white"
        onClick={() => setNewTask(value)}
      >
        {' '}
        new task{' '}
      </button>
    </div>
  )
}

InputTask.propTypes = {}

export default React.memo(InputTask)
