import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-slate-800 p-2 h-fit text-white text-2xl flex justify-between items-center'>
      <Link to='/'>UserList</Link>
      <Link to='/adduser'>AddUser</Link>
      <Link to='/edituser'>EditUser</Link>
    </div>
  )
}

export default Navbar
