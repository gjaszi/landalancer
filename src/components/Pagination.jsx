import React from "react"
import { HiChevronRight, HiChevronLeft } from "react-icons/hi"

const Pagination = ({ activePage, setActivePage, numberOfPages }) => {
  const pages = [...Array(numberOfPages)].map((e, i) => i + 1)

  const handlePagination = (newPage) => {
    if (newPage > 0 && newPage <= numberOfPages) setActivePage(newPage)
  }

  return (
    <div className="bg-slate-800 max-w-fit mx-auto my-4 p-2 rounded-lg drop-shadow-lg select-none">
      <HiChevronLeft
        size={30}
        className="p-1 inline-block cursor-pointer hover:text-sky-500 hover:bg-slate-700 hover:rounded-full"
        onClick={() => handlePagination(activePage - 1)}
      />
      {pages.map((page, i) => (
        <span
          onClick={() => handlePagination(i + 1)}
          className={`py-1 px-2 cursor-pointer hover:bg-slate-700 hover:rounded-full ${
            page === activePage && "text-sky-500 font-bold"
          }`}
          key={i}
        >
          {page}
        </span>
      ))}
      <HiChevronRight
        size={30}
        className="p-1 inline-block cursor-pointer hover:text-sky-500 hover:bg-slate-700 hover:rounded-full"
        onClick={() => handlePagination(activePage + 1)}
      />
    </div>
  )
}

export default Pagination
