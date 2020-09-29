import React from 'react'
// import BtnType from './btn-type'
// import BtnEdit from './btn-edit'

const Task = () => {
  return (
    <div className="flex justify-begin my-10 px-2">
      <div className="mx-2 px-3 py-1 w-1/6 h-56 border-solid border-2 border-gray-800 rounded-md text-sm font-medium leading-5 text-grey-800">
        some text 1
      </div>
    </div>
  )
}

Task.propTypes = {}

export default React.memo(Task)
