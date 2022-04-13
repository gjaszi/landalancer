import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { DataContext } from '../context/DataContext'

const Nav = () => {
  const { windowWidth } = useContext(DataContext)
  const [navOpen, setNavOpen] = useState(false)

  const closeNavigation = () => {
    setNavOpen(false)
  }
  const openNavigation = () => {
    setNavOpen(true)
  }

  useEffect(() => {
    if (windowWidth >= 640) closeNavigation()
  }, [windowWidth])

  return (
    <>
      <header className='h-12'>
        <div className='mx-auto lg:max-w-7xl flex p-6 items-center justify-center h-full relative z-20 bg-slate-900'>
          <Link to='/' className='mr-auto text-2xl font-bold inline-block tracking-widest select-none'>
            LANDALANCER<span className='text-sky-500'>.</span>
          </Link>

          <div className='hidden gap-4 sm:flex'>
            <Link to='/' className='text-lg select-none hover:underline hover:decoration-sky-500'>
              Home
            </Link>
            <Link to='/discover' className='text-lg select-none hover:underline hover:decoration-sky-500'>
              Discover
            </Link>
            <Link to='/bookmark' className='text-lg select-none hover:underline hover:decoration-sky-500'>
              Bookmarks
            </Link>
          </div>
          {navOpen ? (
            <XIcon width={25} onClick={closeNavigation} className='sm:hidden cursor-pointer active:rotate-90 transition-all' />
          ) : (
            <MenuIcon width={25} onClick={openNavigation} className='sm:hidden cursor-pointer active:-rotate-90 transition-all' />
          )}
        </div>
        <div
          className={`absolute flex justify-evenly ${
            navOpen ? `translate-y-0` : '-translate-y-full'
          } transition-all z-10 top-12 right-0 left-0 px-6 py-2 bg-slate-900 border-b border-slate-800 sm:hidden`}>
          <Link to='/' className='text-lg select-none hover:underline hover:decoration-sky-500'>
            Home
          </Link>

          <Link to='/discover' className='text-lg select-none hover:underline hover:decoration-sky-500'>
            Discover
          </Link>

          <Link to='/bookmark' className='text-lg select-none hover:underline hover:decoration-sky-500'>
            Bookmarks
          </Link>
        </div>
      </header>
    </>
  )
}

export default Nav
