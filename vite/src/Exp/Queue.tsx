import DisplayQueue from '@/components/queue/Display-Queue';
import FormQueue from '@/components/queue/Form-Queue';

import { useState } from 'react';

function Queue() {
  const [queue, setQueue] = useState([]);
  const addToQueue = (data: { name: string; service: string }) => {
    console.log(data);
  };
  const updateStatus = (id, status) => {};
  const removeFromQueue = (id) => {};

  return (
    <main className='w-255 mx-auto mt-10'>
      <div className='text-center space-y-1 mb-5'>
        <h1 className='text-blue-400 text-3xl font-bold '>
          Queue Management System
        </h1>
        <p className='text-stone-700'>Manage your customers efficiently</p>
      </div>

      <div className='flex gap-5 '>
        <FormQueue onAdd={addToQueue} />
        <DisplayQueue />
      </div>
    </main>
  );
}
export default Queue;
