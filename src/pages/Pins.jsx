import React, { useContext } from 'react';
import Layout from '../components/Layout';
import UserCardPins from '../components/UserCardPins';
import { DataContext } from '../context/DataContext';

const Pins = () => {
  const { pins } = useContext(DataContext);

  return (
    <Layout title="People you've pinned">
      {pins.length > 0 ? (
        <ul className='grid lg:grid-cols-2 gap-4 py-4 mb-4 rounded-lg'>
          {pins?.map((user) => (
            <UserCardPins key={user.login.uuid} user={user} />
          ))}
        </ul>
      ) : (
        'Nobody in pins'
      )}
    </Layout>
  );
};

export default Pins;
