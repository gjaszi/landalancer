import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { IoClose, IoMenu } from "react-icons/io5"
import { DataContext } from "../context/DataContext"
import Notifications from "./Notifications"

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
      <header className="h-12 mb-12">
        <div className="mx-auto h-full lg:max-w-7xl p-6 flex items-center justify-center relative z-20 bg-slate-900">
          <Notifications />
          <Link to="/" className="mr-auto text-2xl font-bold inline-block tracking-widest select-none">
            LANDALANCER<span className="text-sky-500">.</span>
          </Link>

          <div className="hidden gap-4 sm:flex">
            <Link to="/" className="text-lg select-none hover:underline hover:decoration-sky-500">
              Home
            </Link>
            <Link to="/discover" className="text-lg select-none hover:underline hover:decoration-sky-500">
              Discover
            </Link>
            <Link to="/pins" className="text-lg select-none hover:underline hover:decoration-sky-500">
              Your Pins
            </Link>
          </div>
          {navOpen ? (
            <IoClose
              size={25}
              onClick={closeNavigation}
              className="sm:hidden cursor-pointer active:rotate-90 transition-all"
            />
          ) : (
            <IoMenu
              size={25}
              onClick={openNavigation}
              className="sm:hidden cursor-pointer active:-rotate-90 transition-all"
            />
          )}
        </div>
        <div
          className={`absolute flex justify-evenly ${
            navOpen ? `translate-y-0` : "-translate-y-full"
          } transition-all z-10 top-12 right-0 left-0 px-6 py-2 bg-slate-900 border-b border-slate-800 sm:hidden`}
        >
          <Link
            to="/"
            onClick={closeNavigation}
            className="text-lg select-none hover:underline hover:decoration-sky-500"
          >
            Home
          </Link>

          <Link
            to="/discover"
            onClick={closeNavigation}
            className="text-lg select-none hover:underline hover:decoration-sky-500"
          >
            Discover
          </Link>

          <Link
            to="/pins"
            onClick={closeNavigation}
            className="text-lg select-none hover:underline hover:decoration-sky-500"
          >
            Your Pins
          </Link>
        </div>
      </header>
    </>
  )
}

export default Nav
