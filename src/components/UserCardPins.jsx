import React, { useState } from "react"
import { RiUserSearchLine } from "react-icons/ri"
import { IoClose } from "react-icons/io5"
import { MdLocationPin } from "react-icons/md"

const UserCardPins = ({ user }) => {
  const [detailsOpen, setDetailsOpen] = useState(false)

  let handleOpen = () => {
    setDetailsOpen(!detailsOpen)
  }

  return (
    <div>
      <div className="bg-slate-800 rounded-bl-xl rounded-t-xl p-4">
        <div className="grid grid-cols-[5rem,1fr]">
          <img className="rounded-full ring-2 ring-sky-500 shadow-lg" src={user.picture.large} alt="" />
          <div className="grid px-4 gap-2">
            <p className="font-bold text-xl">
              {user.name.first} {user.name.last} <span className="text-lg text-slate-400">@{user.login.username}</span>
            </p>
            <div>
              <MdLocationPin size={30} className="text-sky-500 inline pr-1" />
              {user.location.country}, {user.location.city}
            </div>
            <p></p>
          </div>
        </div>
      </div>
      <div
        className={`${
          detailsOpen ? `block p-4` : `hidden`
        } transition-all bg-slate-800 rounded-l-xl border-t border-slate-900`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi eius temporibus. Quae reprehenderit
        iure velit ea praesentium alias, placeat minima excepturi. Sint repudiandae, illo suscipit quae dolore quidem
        adipisci iure explicabo expedita corrupti dicta ipsa nemo recusandae! Ipsa tempora, cumque excepturi hic
        necessitatibus odio corrupti commodi reiciendis. Sit assumenda expedita perspiciatis quod repellendus?
        Dignissimos, ad pariatur? Cumque sequi quisquam voluptates at iure eligendi nihil itaque facere commodi debitis,
        est dolore cum nisi ex iste? Perspiciatis, veniam sunt tenetur rem soluta veritatis nemo quaerat mollitia omnis,
        est nobis, accusantium nisi in distinctio error vel dignissimos fuga? Dignissimos eius fugit repellat!
      </div>
      {detailsOpen ? (
        <div
          onClick={handleOpen}
          className="grid grid-cols-[2rem,1fr] items-end px-3 py-2 border-t border-slate-900 cursor-pointer rounded-b-xl bg-slate-800 ml-auto max-w-fit content-center"
        >
          <IoClose size={25} />
          <p className="">Show less</p>
        </div>
      ) : (
        <div
          onClick={handleOpen}
          className="grid grid-cols-[2rem,1fr] items-end px-3 py-2 border-t border-slate-900 cursor-pointer rounded-b-xl bg-slate-800 ml-auto max-w-fit content-center"
        >
          <RiUserSearchLine size={25} />
          <p className="">Learn more about {user.name.first}</p>
        </div>
      )}
    </div>
  )
}

export default UserCardPins
