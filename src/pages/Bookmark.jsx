import React from 'react'

const Bookmark = ({ bookmarkData }) => {
  console.log(bookmarkData)
  return <pre>{JSON.stringify(bookmarkData, null, 2)}</pre>
}

export default Bookmark
