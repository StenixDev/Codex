import ServiceQueue from '@/components/queue/Service-Queue';
type QueueItem = {
  id: number;
  name: string;
  service: string;
  status: string;
};

type DisplayQueueProps = {
  queue: QueueItem[];
};

function DisplayQueue({ queue }: DisplayQueueProps) {
  console.log(queue);
  return (
    <div className='flex-7 bg-stone-100 rounded-sm p-3'>
      <h2 className='text-blue-400 font-bold text-2xl'>Current Queue</h2>

      {queue.length > 0 ? (
        <>
          {queue.map((item) => (
            <ServiceQueue key={item.id} data={item} />
          ))}
        </>
      ) : (
        <p>There are no customers</p>
      )}
    </div>
  );
}
export default DisplayQueue;
