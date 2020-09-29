import React from 'react'
import Changer from './changer-category'

const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-end h-16">
          <Changer />
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
