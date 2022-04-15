import React from "react"

const Layout = ({ children, title }) => {
  return (
    <main className="grow px-6 my-6 w-full lg:mx-auto lg:max-w-7xl">
      <h2 className="text-sky-500 text-xl sm:text-2xl font-bold mb-6">{title}</h2>
      {children}
    </main>
  )
}

export default Layout
