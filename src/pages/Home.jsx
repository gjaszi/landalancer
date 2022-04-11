import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Home = () => {
  const { avatarData } = useContext(DataContext)

  return (
    <div className='grid gap-24 content-center h-full'>
      <div className='grid gap-4'>
        <p className='text-3xl sm:text-6xl drop-shadow font-bold text-sky-500 text-center'>Trouble finding freelancers?</p>
        <p className='text-2xl sm:text-6xl font-bold text-center'>
          LOOK NO MORE<span className='text-sky-500'>.</span>
        </p>
        <p className='text-center text-slate-400 mx-auto sm:w-5/12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam, blanditiis saepe aut quam labore deserunt placeat cupiditate, quod
          nobis nam pariatur laboriosam harum, voluptas eos.
        </p>
      </div>
      <div className='grid gap-4'>
        <button className='button text-xl py-2 px-4 shadow-lg mx-auto block'>
          <Link to='/discover'>Meet our workforce</Link>
        </button>
        <div className='grid grid-cols-10 sm:grid-cols-[repeat(20,1fr)] gap-4 mx-auto overflow-hidden bg-slate-800 p-4'>
          {avatarData.map((avatar, i) => (
            <img width={100} key={`avatar-${i}`} src={avatar} alt='user' className='rounded-xl shadow-lg'></img>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
