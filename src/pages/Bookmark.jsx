import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Bookmark = () => {
  const { bookmarkData } = useContext(DataContext)
  return (
    <>
      <pre>{JSON.stringify(bookmarkData, null, 2)}</pre>
    </>
  )
}

export default Bookmark
