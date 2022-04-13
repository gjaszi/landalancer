import React, { useContext } from 'react'
import Layout from '../components/Layout'

import { DataContext } from '../context/DataContext'

const Bookmark = () => {
  const { bookmarkData } = useContext(DataContext)
  return (
    <Layout>
      <div className='grid gap-2 sm:grid-cols-[1fr,10rem]'>
        <h2 className='text-sky-500 text-xl sm:text-2xl font-bold my-auto'>People you've bookmarked</h2>
      </div>
      {bookmarkData ? 'van itt' : 'nincs itt'}
    </Layout>
  )
}

export default Bookmark
