import React from 'react'
import draw from '../assets/draw-element.png'
import Element from '../assets/Element.png'

const TypoGraph = () => {
  return (
    <div className='w-full relative overflow-hidden'>
      
      <div className="max-w-7xl mx-auto px-[220px] py-[140px] relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="relative inline-flex">
              <h1 className="text-4xl font-bold text-black relative z-10">100% your data</h1>
              <img
                src={draw}
                alt="Highlight element"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-8 w-[260px] -translate-x-3/4 -translate-y-2.6 opacity-90"
              />
            </div>
            <p className="text-black text-md leading-relaxed opacity-90 pt-6">
              The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
            </p>
            <button className="bg-[#4F9CF9] text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 w-fit">
              Read more →
            </button>
          </div>

          {/* Right Image */} 
          <div className="rounded-lg h-[381px] flex items-center justify-center">
            <img 
              src={Element} 
              alt="Element" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypoGraph