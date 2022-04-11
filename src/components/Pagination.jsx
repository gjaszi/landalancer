import React, { useRef, useEffect } from 'react'

const Pagination = ({ activePage, setActivePage, numberOfPages }) => {
  const pages = [...Array(numberOfPages)].map((e, i) => i + 1)
  const paginationRefs = useRef([])

  useEffect(() => {
    paginationRefs.current = paginationRefs.current.slice(0, pages.length)
  }, [pages.length])

  const handlePagination = (el) => {
    paginationRefs.current.forEach((element) => {
      if (el === element && el.classList.contains('pagination--active')) return
      if (el === element && !el.classList.contains('pagination--active')) {
        element.classList.add('pagination--active')
      } else {
        element.classList.remove('pagination--active')
      }
    })
    setActivePage(el.innerText)
  }
  return (
    <div className='bg-slate-800 max-w-fit p-2 rounded-lg drop-shadow-lg'>
      {pages.map((page, i) => (
        <span
          onClick={({ target }) => handlePagination(target)}
          ref={(el) => (paginationRefs.current[i] = el)}
          className={page === activePage ? `pagination pagination--active` : `pagination`}
          key={i}>
          {page}
        </span>
      ))}
    </div>
  )
}

export default Pagination
