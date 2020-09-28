import React from 'react'

const InputTask = () => {
  return (
    <>
      <input type="text" placeholder="введите текст" />
      <button type="button">new task</button>
    </>
  )
}

InputTask.propTypes = {}

export default React.memo(InputTask)
