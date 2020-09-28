import React from 'react'
import Header from './header'
import InputTask from './input-task'
import Changer from './changer-category'
import Task from './task'

const App = () => {
  return (
    <div className="flex flex-col bg-gray-200">
      <Header />
      <Changer />

      <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <InputTask />
      </div>
      <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <Task />
      </div>
    </div>
  )
}

App.propTypes = {}

export default React.memo(App)
