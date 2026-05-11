import React from 'react'
import Logo from '../assets/Logo.png'

const NavBar = () => {
  return (
    <div className="flex bg-blue-900 justify-evenly items-center p-4">
        <div className="logo text-3xl text-white font-medium">
            <img src={Logo} className="text-white w-24" alt="" />
        </div>
        <div className="flex gap-4 text-white justify-center">
            <a href="">Product </a>
            <a href="">Solutions</a>
            <a href="">Resources</a>
            <a href="">Pricing</a>
        </div>
        <div className='flex gap-4'>
            <button className="p-2 w-24 bg-amber-200 rounded-md">Login</button>
            <button className="p-2 bg-blue-400 rounded-md">Try Whitespace free</button>
        </div>
    </div>
  )
}

export default NavBar