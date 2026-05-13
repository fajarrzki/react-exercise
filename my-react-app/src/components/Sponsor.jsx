import React from 'react'
import draw from '../assets/draw-element.png'

const Sponsor = () => {
  return (
    <div>
        <div className='relative inline-flex items-center justify-center'>
            <h1 className="text-4xl font-bold relative z-10">Choose Your Plan</h1>
                    <img
                        src={draw}
                        alt="Highlight element"
                        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-8 w-[260px] -translate-x-4.0 -translate-y-2.6 opacity-90"
                    />
        </div>
    </div>
  )
}

export default Sponsor