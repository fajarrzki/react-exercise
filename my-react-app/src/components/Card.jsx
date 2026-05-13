import React from 'react'
import Checklist from '../assets/icons/checklist.png'
import Element from '../assets/Element.png'
import draw from '../assets/draw-element.png'

const Card = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-20'>
        <div className='max-w-3xl mx-auto text-center'>
            <div className="relative inline-flex">
              <h1 className="text-4xl font-bold relative z-10">Choose Your Plan</h1>
              <img
                src={draw}
                alt="Highlight element"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-8 w-[260px] -translate-x-4.0 -translate-y-2.6 opacity-90"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
            </p>
        </div>

        <div className='grid gap-6 lg:grid-cols-3 mt-14 items-start'>
            <div className='bg-white border border-[#FFE492] rounded-[32px] p-8 shadow-sm min-h-[520px] flex flex-col justify-between'>
                <div>
                    <h2 className="text-sm font-semibold">Free</h2>
                    <p className="mt-4 text-3xl font-bold">$0</p>
                    <p className="mt-3 text-sm text-gray-600">Capture ideas and find them quickly.</p>
                    <ul className="flex flex-col gap-4 mt-8 text-sm text-gray-700">
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />Sync unlimited devices</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />10 GB monthly uploads</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />200 MB max note size</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />Customize Home dashboard and access extra widgets</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />Connect primary Google Calendar account</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />Add due dates, reminders, and notifications to your tasks</li>
                    </ul>
                </div>
                <button className="mt-8 w-full border border-[#FFE492] text-[#1A1A1A] py-3 rounded-xl hover:bg-[#FFF5D5] hover:scale-105 transition duration-300">
                    Get Started
                </button>
            </div>

            <div className='bg-[#043873] text-white rounded-[32px] p-8 shadow-2xl min-h-[600px] lg:-translate-y-6'>
                <div>
                    <h2 className="text-sm uppercase tracking-[0.24em] text-[#A8C5F6]">Personal</h2>
                    <p className="mt-4 text-5xl font-bold text-[#FFE492]">$11.99</p>
                    <p className="mt-3 text-sm text-[#C5D4F8]">Keep home and family on track</p>
                    <ul className="flex flex-col gap-4 mt-8 text-sm text-[#D9E6FF]">
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4 invert" />Sync unlimited devices</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4 invert" />10 GB monthly uploads</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4 invert" />200 MB max note size</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4 invert" />Customize Home dashboard and access extra widgets</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4 invert" />Connect primary Google Calendar account</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4 invert" />Add due dates, reminders, and notifications to your tasks</li>
                    </ul>
                </div>
                <button className="mt-8 w-full bg-[#4F9CF9] text-white py-3 rounded-xl hover:bg-[#3B85E8] hover:scale-105 transition duration-300">
                    Get Started
                </button>
            </div>

            <div className='bg-white border border-[#FFE492] rounded-[32px] p-8 shadow-sm min-h-[520px] flex flex-col justify-between'>
                <div>
                    <h2 className="text-sm font-semibold">Organization</h2>
                    <p className="mt-4 text-3xl font-bold">$49.99</p>
                    <p className="mt-3 text-sm text-gray-600">Capture ideas and find them quickly.</p>
                    <ul className="flex flex-col gap-4 mt-8 text-sm text-gray-700">
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />Sync unlimited devices</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />10 GB monthly uploads</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />200 MB max note size</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />Customize Home dashboard and access extra widgets</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />Connect primary Google Calendar account</li>
                        <li className='flex items-center gap-2'><img src={Checklist} alt="Check" className="w-4 h-4" />Add due dates, reminders, and notifications to your tasks</li>
                    </ul>
                </div>
                <button className="mt-8 w-full border border-[#FFE492] text-[#1A1A1A] py-3 rounded-xl hover:bg-[#FFF5D5] hover:scale-105 transition duration-300">
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card