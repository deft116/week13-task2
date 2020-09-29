import React from 'react'
import Header from './header'
import InputTask from './input-task'

// import Task from './task'

const App = () => {
  return (
    <>
      <Header />
      <InputTask />
    </>
  )
}

App.propTypes = {}

export default React.memo(App)
