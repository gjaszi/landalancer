import React, { useContext } from "react"
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs"
import { IoMailOutline, IoInformationCircleOutline } from "react-icons/io5"
import { DataContext } from "../context/DataContext.jsx"

const UserCard = ({ user }) => {
  const { pins, setPins, setNotificationMessage } = useContext(DataContext)

  const handleNotification = (message) => {
    setNotificationMessage(message)
  }

  const handleBookmark = () => {
    if (!pins.includes(user)) {
      setPins((prevState) => [...prevState, user])
      handleNotification("User pinned!")
    } else {
      setPins((prevState) => prevState.filter((tmp) => tmp.email !== user.email))
      handleNotification("User unpinned!")
    }
  }

  const handleMail = () => {
    navigator.clipboard.writeText(user.email)
    handleNotification("Email copied to clipboard!")
  }

  return (
    <div className="grid grid-cols-[1fr,2rem] sm:grid-cols-[5rem,1fr,1.75rem] gap-4 p-4 bg-slate-800 rounded-lg drop-shadow-lg ">
      {/* avatar */}
      <div className="hidden sm:grid content-center">
        <img src={user.picture.large} alt="user" className="rounded-full outline outline-sky-500 sm:inline-block" />
      </div>

      {/* info */}
      <div className="flex flex-col place-content-center">
        <p className="text-xl font-medium pr-2 inline-block">
          {user.name.first} {user.name.last}
          <img
            src={`https://flagcdn.com/24x18/${user.nat.toLowerCase()}.png`}
            alt="nationality"
            className="inline-block ml-2 pb-1"
          />
        </p>
        <p className="text-sky-500">Front-end Developer</p>
        <p className="hidden sm:block text-sm text-slate-300">{user.email}</p>
      </div>
      {/* controls */}
      <div className="flex flex-col justify-evenly rounded-lg">
        <IoInformationCircleOutline
          size={25}
          className="w-full cursor-pointer hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all"
        />
        {pins.includes(user) ? (
          <BsPinAngleFill
            size={25}
            onClick={handleBookmark}
            className="w-full cursor-pointer text-sky-500 hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all"
          />
        ) : (
          <BsPinAngle
            size={25}
            onClick={handleBookmark}
            className="w-full cursor-pointer hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all"
          />
        )}

        <IoMailOutline
          onClick={handleMail}
          size={25}
          className="w-full cursor-pointer hover:text-sky-500 active:scale-95  drop-shadow-xl transition-all"
        />
      </div>
    </div>
  )
}

export default UserCard
