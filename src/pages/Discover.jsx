import React, { useContext, useState, useEffect } from "react"
import Selector from "../components/Selector"
import Pagination from "../components/Pagination"
import UserCard from "../components/UserCard"
import Layout from "../components/Layout"
import { DataContext } from "../context/DataContext"
import PageTitle from "../components/PageTitle"

const Discover = () => {
  const { userData } = useContext(DataContext)
  const [activePage, setActivePage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(6)
  const [numberOfPages, setNumberOfPages] = useState(null)

  useEffect(() => {
    setActivePage(1)
    setNumberOfPages(Math.round(userData.length / resultsPerPage), 0)
  }, [userData.length, resultsPerPage])

  const getStartIndex = () => {
    return activePage * resultsPerPage - resultsPerPage
  }

  const getEndIndex = () => {
    return activePage * resultsPerPage
  }

  const selectorProps = {
    resultsPerPage,
    setResultsPerPage,
  }

  const paginationProps = {
    activePage,
    setActivePage,
    numberOfPages,
  }

  return (
    <Layout>
      <PageTitle title="People you might like" />
      <Selector options={[4, 6, 8, 10, 12]} {...selectorProps} />
      <div className="grid gap-4 lg:grid-cols-2">
        {userData.slice(getStartIndex(), getEndIndex()).map((user) => {
          return <UserCard key={user.login.uuid} user={user} />
        })}
      </div>
      <Pagination {...paginationProps} />
    </Layout>
  )
}

export default Discover
