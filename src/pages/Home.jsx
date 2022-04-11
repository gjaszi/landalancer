import React, { useContext, useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Home = () => {
  const { userData } = useContext(DataContext)
  const [displayedAvatars, setDisplayedAvatars] = useState()
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const handleResize = useCallback(() => {
    setWindowSize(window.innerWidth)
  }, [setWindowSize])

  useEffect(() => {
    if (windowSize <= 1024 && displayedAvatars !== 20) setDisplayedAvatars(20)
    else if (windowSize >= 1024 && displayedAvatars !== 40) setDisplayedAvatars(40)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize, windowSize, displayedAvatars])

  return (
    <div className='grid content-center gap-4 h-full bg-gradient-to-t from-sky-600 via-sky-900 to-slate-800'>
      <p className='text-3xl sm:text-6xl drop-shadow font-bold tracking-wide text-sky-500 text-center'>Trouble finding freelancers?</p>
      <p className='text-2xl sm:text-3xl tracking-widest font-bold text-center'>
        LOOK NO MORE<span className='text-sky-500'>,</span> <br />
        YOU FOUND THEM<span className='text-sky-500'>.</span>
      </p>
      <p className='text-center text-slate-400 mx-auto lg:w-5/12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam, blanditiis saepe aut quam labore deserunt placeat cupiditate, quod
        nobis nam pariatur laboriosam harum, voluptas eos.
      </p>
      <button className='button text-xl py-2 px-4 shadow-lg mx-auto mt-20'>
        <Link to='/discover'>Meet our workforce</Link>
      </button>

      <div className='grid content-center grid-cols-10 lg:grid-cols-[repeat(20,1fr)] gap-4 p-4 mx-auto bg-slate-800 bg-opacity-40'>
        {userData.slice(0, displayedAvatars).map(({ picture }, i) => (
          <img width={100} key={`avatar-${i}`} src={picture.large} alt='user' className='rounded-xl shadow-lg drop-shadow-md'></img>
        ))}
      </div>
    </div>
  )
}

export default Home
