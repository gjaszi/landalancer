import React, { useContext } from "react"
import Layout from "../components/Layout"
import PageTitle from "../components/PageTitle"

import { DataContext } from "../context/DataContext"

const Pins = () => {
  const { pins } = useContext(DataContext)

  return (
    <Layout>
      <PageTitle title="People you've pinned" />
      <div className="grid grid-cols-4 gap-4 p-4 bg-slate-800 rounded-lg shadow-lg">
        {pins?.map((user) => (
          <img className="rounded-full" src={user.picture.large} alt="user" />
        ))}
      </div>
    </Layout>
  )
}

export default Pins
