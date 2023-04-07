import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='main-navbar'>
        <div className='main-navbar-holder'>
            <div className=''></div>
            <div>
                <Link to="">Home</Link>
                <Link to="">Rounds</Link>
                <Link to="">Contacts</Link>
            </div>
            <div>
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar