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
  onDelete: (id: number) => void;
};

function ServiceQueue({ data, onUpdate, onDelete }: QueueItem) {
  const statusQueue = (status: string) => {
    switch (status) {
      case 'serving':
        // code to run
        return 'text-red-400';
      case 'completed':
        return 'text-yellow-500';
      default:
        return 'text-blue-400';
    }
  };

  return (
    <div className='flex justify-between items-center bg-stone-200 my-5 p-5'>
      <div className='flex flex-col'>
        <span className='font-bold text-xl'>{data.name}</span>
        <span>service: {data.service}</span>
        <span className={`${statusQueue(data.status)} font-bold1`}>
          {data.status}
        </span>
      </div>

      <div className='flex gap-2'>
        {data.status === 'waiting' && (
          <Button
            onClick={() => onUpdate(data.id, 'serving')}
            className='bg-green-500 hover:bg-green-600'
          >
            Serve
          </Button>
        )}

        {data.status === 'serving' && (
          <Button
            onClick={() => onUpdate(data.id, 'completed')}
            className='bg-green-500 hover:bg-green-600'
          >
            Completed
          </Button>
        )}
        <Button
          onClick={() => onDelete(data.id)}
          className='bg-red-500 hover:bg-red-600'
        >
          <UserRoundMinus />
        </Button>
      </div>
    </div>
  );
}
export default ServiceQueue;
