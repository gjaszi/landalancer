import React, { useContext, useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import UserCard from '../components/UserCard'
import Layout from '../components/Layout'
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
    }, 1500)

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
    <Layout>
      <p
        className={`${
          notificationMessage ? 'scale-100' : 'scale-0'
        } fixed z-20 top-12 inset-x-0 mx-auto max-w-fit py-1 px-2 transition-all bg-green-600 shadow-lg rounded-lg`}>
        {notificationMessage}
      </p>
      <h2 className='text-sky-500 text-xl sm:text-2xl font-bold my-auto'>People you might like</h2>
      <div className='grid gap-4 py-4 lg:grid-cols-2'>
        {userData.slice(getStartIndex(), getEndIndex()).map((user) => {
          return <UserCard key={user.login.uuid} user={user} setNotificationMessage={setNotificationMessage} />
        })}
      </div>
      <Pagination {...paginationProps} />
    </Layout>
  )
}

export default Discover
