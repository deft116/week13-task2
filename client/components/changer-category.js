import React from 'react'

const Changer = () => {
  return (
    <div className="flex">
      <a
        href="#"
        className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Day
      </a>
      <a
        href="#"
        className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Moth
      </a>
      <a
        href="#"
        className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Year
      </a>
      <a
        href="#"
        className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        All
      </a>
    </div>
  )
}

Changer.propTypes = {}

export default React.memo(Changer)
