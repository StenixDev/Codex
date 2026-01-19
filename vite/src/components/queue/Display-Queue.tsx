import ServiceQueue from '@/components/queue/Service-Queue';
function DisplayQueue() {
  return (
    <div className='flex-7 bg-stone-100 rounded-sm p-3'>
      <h2 className='text-blue-400 font-bold text-2xl'>Current Queue</h2>

      <ServiceQueue />

      <ServiceQueue />

      <ServiceQueue />
    </div>
  );
}
export default DisplayQueue;
