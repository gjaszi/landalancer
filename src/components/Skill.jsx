import React from 'react';

const Skill = ({ title }) => {
  return (
    <li className='text-sm font-bold py-0.5 max-w-fit px-2 text-slate-900 bg-sky-500 text-center rounded-lg shadow'>
      {title}
    </li>
  );
};

export default Skill;
