import React, { useState } from 'react';
import { RiUserSearchLine } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import Skill from './Skill';
import UserCardControls from './UserCardControls';

const UserCardPins = ({ user }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleOpen = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <li>
      {/* main card */}
      <div className='bg-slate-800 rounded-bl-xl rounded-t-xl p-4'>
        <div className='grid grid-cols-[5rem,1fr,1.75rem] gap-2'>
          <img className='rounded-full ring-2 ring-sky-500 shadow-lg' src={user.picture.large} alt='' />
          <div className='grid px-4 gap-2'>
            <p className='font-bold text-xl'>
              {user.name.first} {user.name.last} <span className='text-sm  text-slate-400'>@{user.login.username}</span>
            </p>
            <div>
              <MdLocationPin size={30} className='text-sky-500 inline pr-1' />
              {user.location.country}, {user.location.city}
            </div>
            <ul className='flex self-start  max-h-fit flex-wrap items-start gap-1'>
              <Skill title='React' />
              <Skill title='Next.js' />
              <Skill title='Tailwind' />
              <Skill title='REST' />
            </ul>
          </div>

          <UserCardControls user={user} />
        </div>
      </div>

      {/* details */}
      <div
        className={`${!detailsOpen && `hidden`} p-4 transition-all bg-slate-800 rounded-l-xl border-t border-slate-900`}
      >
        <p className='underline underline-offset-1 uppercase'>About me</p>
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
          className='grid grid-cols-[2rem,1fr] items-end px-3 py-2 border-t border-slate-900 cursor-pointer rounded-b-xl bg-slate-800 ml-auto max-w-fit content-center'
        >
          <IoClose size={25} />
          <p className=''>Show less</p>
        </div>
      ) : (
        <div
          onClick={handleOpen}
          className='grid grid-cols-[2rem,1fr] items-end px-3 py-2 border-t border-slate-900 cursor-pointer rounded-b-xl bg-slate-800 ml-auto max-w-fit content-center'
        >
          <RiUserSearchLine size={25} />
          <p className=''>Learn more about {user.name.first}</p>
        </div>
      )}
    </li>
  );
};

export default UserCardPins;
