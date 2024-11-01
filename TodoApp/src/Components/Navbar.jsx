import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between text-green-400 bg-gray-500 py-2  hover:font-bold transition-all group'>
        <div className='logo'>
    <ul className='font-bold text-xl mx-8 cursor-pointer hover:animate-bounce'>
    <span className='absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-red-400 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        !STask
    </ul>
        </div>
        <ul className='flex gap-8 mx-9 '>
        <li className='relative cursor-pointer hover:font-bold transition-all group'>
          <span className='hover:text-green-500'>Home</span>
          <span className='absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        </li>
        <li className='relative cursor-pointer hover:font-bold transition-all group'>
          <span className='hover:text-green-500'>Your Task</span>
          <span className='absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></span>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar