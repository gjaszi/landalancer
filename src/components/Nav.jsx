import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { DataContext } from '../context/DataContext'

const Nav = () => {
  const { windowWidth } = useContext(DataContext)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    if (windowWidth >= 640) setNavOpen(false)
  }, [windowWidth])

  return (
    <>
      <header className='h-12'>
        <div className='mx-auto lg:max-w-7xl flex p-6 items-center justify-center h-full relative z-20 bg-slate-900'>
          <Link to='/' className='mr-auto text-2xl font-bold inline-block tracking-widest select-none'>
            LANDALANCER<span className='text-sky-500'>.</span>
          </Link>

          <div className='hidden gap-4 sm:flex'>
            <Link to='/' className='nav__link'>
              Home
            </Link>
            <Link to='/discover' className='nav__link'>
              Discover
            </Link>
            <Link to='/bookmark' className='nav__link'>
              Bookmarks
            </Link>
          </div>
          {navOpen ? (
            <XIcon width={25} onClick={() => setNavOpen(!navOpen)} className='sm:hidden cursor-pointer active:rotate-90 transition-all' />
          ) : (
            <MenuIcon width={25} onClick={() => setNavOpen(!navOpen)} className='sm:hidden cursor-pointer active:-rotate-90 transition-all' />
          )}
        </div>
        <div
          className={`absolute flex justify-evenly ${
            navOpen ? `translate-y-0` : '-translate-y-full'
          } transition-all z-10 top-12 right-0 left-0 px-6 py-2 bg-slate-900 border-b border-slate-800 sm:hidden`}>
          <Link to='/' className='nav__link' onClick={() => setNavOpen(!navOpen)}>
            Home
          </Link>

          <Link to='/discover' className='nav__link' onClick={() => setNavOpen(!navOpen)}>
            Discover
          </Link>

          <Link to='/bookmark' className='nav__link' onClick={() => setNavOpen(!navOpen)}>
            Bookmarks
          </Link>
        </div>
      </header>
    </>
  )
}

export default Nav
