import React from 'react'

const Navbar = () => {
  return (
  <nav className='font-nunito
  flex
  justify-between
  items-center
  h-[10vh]
  p-4
  bg-white
  shadow-lg
  '>
    <h2 className="text-2xl font-bold">
      Where in the world?
    </h2>
    <p className='
    cursor-pointer
    text-gray-500
    '>
      Dark Mode
      &nbsp;
    </p>
  </nav>
  )
}

export default Navbar