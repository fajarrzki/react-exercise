import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroElement from '../assets/hero-element.png'

const Hero = () => {
  const navigate = useNavigate()

  const handleScheduleClick = () => {
    navigate('/recruitment')
  }

  return (
    <div className='bg-[#043873] w-full relative overflow-hidden'>
      {/* Background Element */}
      <img 
        src={heroElement} 
        alt="Hero background decoration" 
        className="absolute object-cover opacity-20 w-full h-full top-0 left-0"
      />
      
      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-white text-5xl leading-tight">
              Get More Done with whitepace
            </h1>
            <p className="text-white text-md leading-relaxed opacity-90">
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
            </p>
            <button 
              onClick={handleScheduleClick}
              className="bg-[#4F9CF9] text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 w-fit">
              Manage Candidates Schedule Psychotest →
            </button>
          </div>

          {/* Right Image */} 
          <div className="bg-[#C4DEFD] rounded-lg h-96 flex items-center justify-center">
            <img 
              src="/src/assets/hero-image.svg" 
              alt="Whitepace Hero" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero