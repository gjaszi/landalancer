import React, { useContext, useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import UserCard from '../components/UserCard'
import { DataContext } from '../context/DataContext'

const Discover = () => {
  const { userData } = useContext(DataContext)
  const [activePage, setActivePage] = useState(1)
  const resultsPerPage = 6
  // const [resultsPerPage, setResultsPerPage] = useState(6)
  const [numberOfPages, setNumberOfPages] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    setNumberOfPages(Math.round(userData.length / resultsPerPage), 0)
  }, [userData.length])

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationMessage(null)
    }, 3000)

    return () => clearTimeout(timer)
  })

  const getStartIndex = () => {
    return activePage * resultsPerPage - resultsPerPage
  }

  const getEndIndex = () => {
    return activePage * resultsPerPage
  }

  const paginationProps = {
    activePage,
    setActivePage,
    numberOfPages,
  }

  return (
    <div className='mx-auto lg:max-w-7xl p-6'>
      {notificationMessage && (
        <p className='text-center max-w-fit my-2 ml-auto py-2 px-4 bg-green-500 text-slate-900 shadow-lg rounded-lg'>{notificationMessage}</p>
      )}
      <div className='grid gap-2 sm:grid-cols-[1fr,10rem]'>
        <h2 className='text-sky-500 text-xl sm:text-2xl font-bold my-auto'>People you might like</h2>
      </div>
      <div className='grid gap-4 py-4 lg:grid-cols-2'>
        {userData.slice(getStartIndex(), getEndIndex()).map((user) => {
          return <UserCard key={user.login.uuid} user={user} setNotificationMessage={setNotificationMessage} />
        })}
      </div>
      <Pagination {...paginationProps} />
    </div>
  )
}

export default Discover
