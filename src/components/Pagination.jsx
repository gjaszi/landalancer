import React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"

const Pagination = ({ activePage, setActivePage, numberOfPages }) => {
  const pages = [...Array(numberOfPages)].map((e, i) => i + 1)

  const handlePagination = (newPage) => {
    if (newPage > 0 && newPage <= numberOfPages) setActivePage(newPage)
  }

  return (
    <div className="bg-slate-800 max-w-fit mx-auto p-2 rounded-lg drop-shadow-lg select-none">
      <ArrowLeftIcon
        className="w-8 p-1 inline-block cursor-pointer hover:text-sky-500 hover:bg-slate-700 hover:rounded-full"
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
      <ArrowRightIcon
        className="w-8 p-1 inline-block cursor-pointer hover:text-sky-500 hover:bg-slate-700 hover:rounded-full"
        onClick={() => handlePagination(activePage + 1)}
      />
    </div>
  )
}

export default Pagination
