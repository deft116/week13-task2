import React from 'react'
import BtnType from './btn-type'
import BtnEdit from './btn-edit'

const Task = () => {
  return (
    <>
      <p>SOME TASK</p>
      <BtnEdit />
      <BtnType />
    </>
  )
}

Task.propTypes = {}

export default React.memo(Task)
