import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(): JSX.Element {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white'>
      <header className='sticky top-0 z-50 bg-black/60'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <span className='w-8 h-8 bg-[#C9A66B] rounded-full' aria-label='logo' />
            <span className='font-semibold'>Heritage Barbers</span>
          </div>
          <nav className='hidden md:flex space-x-4'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/booking'>Booking</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
        </div>
      </header>

      <section className='h-72 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Traditional Barbering. Modern Style.</h1>
          <p className='mt-2'>Classic cuts, sharp shaves, and authentic craftsmanship.</p>
          <div className='mt-4'>
            <Link to='/booking' className='mr-2 bg-[#8B1E23] px-4 py-2 rounded'>Book Appointment</Link>
            <Link to='/services' className='ml-2 border border-white px-4 py-2 rounded'>View Services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
