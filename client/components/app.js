import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './header'
import InputTask from './input-task'
import Task from './task'

const App = () => {
  const [newTask, setNewTask] = useState('')
  const [allTasks, setAllTasks] = useState([])

  useEffect(() => {
    if (newTask) {
      axios
        .post('http://localhost:8087/api/v1/tasks/:category', newTask)
        .then((res) => setAllTasks(res.data))
        .catch((e) => console.log(e, newTask))
    }
    return () => {}
  }, [newTask])

  return (
    <>
      <Header />
      <InputTask setNewTask={setNewTask} />
      <Task allTasks={allTasks} />
    </>
  )
}

App.propTypes = {}

export default React.memo(App)
