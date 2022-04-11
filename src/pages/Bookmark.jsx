import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Bookmark = () => {
  const { bookmarkData } = useContext(DataContext)
  return (
    <div className='mx-auto lg:max-w-7xl p-6'>
      <div className='grid gap-2 sm:grid-cols-[1fr,10rem]'>
        <h2 className='text-sky-500 text-xl sm:text-2xl font-bold my-auto'>People you've bookmarked</h2>
      </div>
      {bookmarkData ? 'van itt' : 'nincs itt'}
    </div>
  )
}

export default Bookmark
