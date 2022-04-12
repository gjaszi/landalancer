import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Home = () => {
  const { userData, windowWidth } = useContext(DataContext)
  const [displayedAvatars, setDisplayedAvatars] = useState()

  useEffect(() => {
    if (windowWidth <= 1280) setDisplayedAvatars(20)
    else if (windowWidth >= 1280) setDisplayedAvatars(40)
  }, [windowWidth])

  return (
    <div className='h-full flex flex-col bg-gradient-to-t from-sky-700 via-slate-800 to-slate-900'>
      <div className='grow p-6 grid content-center gap-4 select-none'>
        <p className='text-4xl md:text-8xl drop-shadow text-sky-500 text-center'>Trouble finding freelancers?</p>
        <p className='text-2xl md:text-5xl drop-shadow text-center font-bold'>
          YOU FOUND THEM<span className='text-sky-500'>.</span>
        </p>
        <p className='text-center text-slate-400 mx-auto lg:w-5/12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam, blanditiis saepe aut quam labore deserunt placeat cupiditate, quod
          nobis nam pariatur laboriosam harum, voluptas eos.
        </p>
        <button className='button font-bold tracking-wide text-2xl mt-24 py-3 px-5 max-w-fit mx-auto hover:drop-shadow-lg'>
          <Link to='/discover'>Meet our workforce</Link>
        </button>
      </div>
      <div className='grid content-center grid-cols-5 sm:grid-cols-[repeat(10,1fr)] xl:grid-cols-[repeat(20,1fr)] gap-4 p-4 bg-slate-800 bg-opacity-0'>
        {userData.slice(0, displayedAvatars).map(({ picture }, i) => (
          <img width={100} key={`avatar-${i}`} src={picture.large} alt='user' className='rounded-xl shadow-lg drop-shadow-md'></img>
        ))}
      </div>
    </div>
  )
}

export default Home
