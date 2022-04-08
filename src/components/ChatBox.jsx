import React from 'react'
import { XIcon } from '@heroicons/react/outline'

const ChatBox = (props) => {
  return (
    <div className='absolute inset-0 z-20 bg-slate-800 bg-opacity-70'>
      <div className='fixed bottom-0 right-0 h-3/6 w-full sm:bottom-6 sm:right-6 sm:w-6/12 lg:w-4/12 xl:w-3/12 flex flex-col gap-4 p-6 border-t sm:rounded-xl sm:border border-slate-500 bg-slate-800 drop-shadow-lg'>
        <div>
          <p className='underline bg-slate-900 rounded p-4 relative'>
            {props.chatBoxUser.name.first} {props.chatBoxUser.name.last}
            <XIcon
              width={25}
              className='absolute top-0 right-0 text-red-500 cursor-pointer active:rotate-90 transition-all'
              onClick={() => {
                props.setChatBoxOpen(!props.chatBoxOpen)
              }}
            />
          </p>
        </div>
        <div className='grow bg-slate-900 p-4 rounded overflow-hidden'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, molestias
          tenetur? Molestiae laudantium numquam, pariatur sequi quia optio
          praesentium eaque.
        </div>
        <div>
          <input
            type='text'
            className='rounded drop-shadow outline-0 focus:ring ring-sky-500 text-slate-900'
          />
          <button className='text-center bg-sky-600 hover:bg-sky-700 rounded px-3 ml-2'>
            SEND
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox
