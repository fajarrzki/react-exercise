import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
import Vector from '../assets/icons/Vector.png'
import {Menu, X} from 'lucide-react' 

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }
            lastScrollY = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
     <div
      className="
        w-full sticky top-0 left-0 z-50"

    >
      <div className={`bg-[#043873]
        max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-10 relative  transition-all duration-1000 ease-in-out
        ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
      `}>

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            className="w-28 hover:scale-105 transition duration-300"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-white absolute left-1/2 transform -translate-x-1/2">

          <a
            href=""
            className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
          >
            Products
            <img src={Vector} alt="" className="w-2 object-contain" />
          </a>

          <a
            href=""
            className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
          >
            Solutions
            <img src={Vector} alt="" className="w-2 object-contain" />
          </a>

          <a
            href=""
            className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
          >
            Resources
            <img src={Vector} alt="" className="w-2 object-contain" />
          </a>

          <a
            href=""
            className="flex items-center gap-2 hover:text-gray-300 transition duration-300"
          >
            Pricing
            <img src={Vector} alt="" className="w-2 object-contain" />
          </a>

        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <button className="px-8 py-3 bg-[#FFE492] rounded-lg font-medium hover:scale-105 hover:shadow-lg transition duration-300">
            Login
          </button>

          <button className="px-6 py-3 bg-[#4F9CF9] rounded-lg text-white font-medium hover:scale-105 hover:bg-blue-500 transition duration-300">
            Try Whitespace free →
          </button>

        </div>

        {/* Burger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white transition duration-300"
        >
          <div className="transition-all duration-300 ease-in-out">
            {isOpen ? (
              <X size={38} className="rotate-180 transition duration-300" />
            ) : (
              <Menu size={38} className="hover:scale-110 transition duration-300" />
            )}
          </div>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="flex flex-col px-6 pb-6 text-white bg-[#043873]">

          <a
            href=""
            className="py-4 border-b border-white/20 flex items-center justify-between hover:pl-2 transition-all duration-300"
          >
            Products
            <img src={Vector} alt="" className="w-2" />
          </a>

          <a
            href=""
            className="py-4 border-b border-white/20 flex items-center justify-between hover:pl-2 transition-all duration-300"
          >
            Solutions
            <img src={Vector} alt="" className="w-2" />
          </a>

          <a
            href=""
            className="py-4 border-b border-white/20 flex items-center justify-between hover:pl-2 transition-all duration-300"
          >
            Resources
            <img src={Vector} alt="" className="w-2" />
          </a>

          <a
            href=""
            className="py-4 border-b border-white/20 flex items-center justify-between hover:pl-2 transition-all duration-300"
          >
            Pricing
            <img src={Vector} alt="" className="w-2" />
          </a>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-6">

            <button className="bg-[#FFE492] text-black py-3 rounded-lg font-medium hover:scale-[1.02] transition duration-300">
              Login
            </button>

            <button className="bg-[#4F9CF9] text-white py-3 rounded-lg font-medium hover:scale-[1.02] transition duration-300">
              Try Whitespace free →
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default NavBar