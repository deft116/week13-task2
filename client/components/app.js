import React from 'react'
import Header from './header'
import InputTask from './input-task'
import Changer from './changer-category'
import Task from './task'

const App = () => {
  return (
    <>
      <Header />
      <InputTask />
      <Changer />
      <div>
        <Task />
        <Task />
        <Task />
      </div>
    </>
  )
}

App.propTypes = {}

export default React.memo(App)
