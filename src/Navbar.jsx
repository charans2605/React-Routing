import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      {/* <a href='url'>Home</a> */}

      <nav className='nav'>
        <Link to="/home" className='nav-item'>Home</Link>
        <Link to="/about" className='nav-item'>About</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
      </nav>
    </div>
  )
}
