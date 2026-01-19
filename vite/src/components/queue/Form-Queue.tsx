import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserPlus } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

type QueueData = {
  name: string;
  service: string;
};

type FormQueueProps = {
  onAdd: (data: QueueData) => void;
};

function FormQueue({ onAdd }: FormQueueProps) {
  const [name, setName] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({ name, service });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex-3 bg-stone-100 rounded-sm p-3 space-y-2'
      >
        <h2 className='text-blue-400 font-bold'>Add to Queue</h2>
        <Input
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='bg-white'
        />

        <Select value={service} onValueChange={setService}>
          <SelectTrigger className='w-full bg-white'>
            <SelectValue placeholder='Select a Service' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Service</SelectLabel>
              <SelectItem value='consultation'>Consultation</SelectItem>
              <SelectItem value='payment'>Payment</SelectItem>
              <SelectItem value='support'>Support</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className='w-full' type='submit'>
          {' '}
          <UserPlus /> Add Customer
        </Button>
      </form>
    </div>
  );
}
export default FormQueue;
