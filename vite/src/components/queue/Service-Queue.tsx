import { Button } from '@/components/ui/button';
import { UserRoundMinus } from 'lucide-react';
type QueueItem = {
  data: {
    id: number;
    name: string;
    service: string;
    status: string;
  };

  onUpdate: (id: number, newStatus: string) => void;
};

function ServiceQueue({ data, onUpdate }: QueueItem) {
  function handleClick() {
    console.log(data.id, 'working');
    onUpdate(data.id, 'working');
  }

  return (
    <div className='flex justify-between items-center bg-stone-200 my-5 p-5'>
      <div className='flex flex-col'>
        <span className='font-bold text-xl'>{data.name}</span>
        <span>service: {data.service}</span>
        <span className='text-blue-400 font-bold'>{data.status}</span>
      </div>

      <div className='flex gap-2'>
        <Button
          onClick={handleClick}
          className='bg-green-500 hover:bg-green-600'
        >
          Serve
        </Button>
        <Button className='bg-red-500 hover:bg-red-600'>
          <UserRoundMinus />
        </Button>
      </div>
    </div>
  );
}
export default ServiceQueue;
