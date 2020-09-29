import React, { useState } from 'react'
import Header from './header'
import InputTask from './input-task'
import Task from './task'

const App = () => {
  const [newTask, setNewTask] = useState('')
  return (
    <>
      <Header />
      <InputTask setNewTask={setNewTask} />
      <Task newTask={newTask} />
    </>
  )
}

App.propTypes = {}

export default React.memo(App)
