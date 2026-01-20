import DisplayQueue from '@/components/queue/Display-Queue';
import FormQueue from '@/components/queue/Form-Queue';

import { useState } from 'react';

type QueueItem = {
  id: number;
  name: string;
  service: string;
  status: string;
};

function Queue() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const addToQueue = (data: { name: string; service: string }) => {
    const newItem: QueueItem = {
      id: Date.now(), // or use uuid()
      name: data.name,
      service: data.service,
      status: 'waiting', // default status
    };
    setQueue([...queue, newItem]);
  };
  const updateStatus = (id: number, newStatus: string) => {
    setQueue((prev) =>
      prev.map((status) =>
        status.id === id ? { ...status, status: newStatus } : status,
      ),
    );
  };
  const removeFromQueue = (id: number) => {
    setQueue((prev) => prev.filter((cv) => cv.id !== id));
  };

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
        <DisplayQueue
          queue={queue}
          onUpdate={updateStatus}
          onDelete={removeFromQueue}
        />
      </div>
    </main>
  );
}
export default Queue;
