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
import ServiceQueue from '@/components/queue/Service-Queue';

function Queue() {
  return (
    <main className='w-255 mx-auto mt-10'>
      <div className='text-center space-y-1 mb-5'>
        <h1 className='text-blue-400 text-3xl font-bold '>
          Queue Management System
        </h1>
        <p className='text-stone-700'>Manage your customers efficiently</p>
      </div>

      <div className='flex gap-5 '>
        <div className='flex-3 bg-stone-100 rounded-sm p-3 space-y-2'>
          <h2 className='text-blue-400 font-bold'>Add to Queue</h2>
          <Input value={'ddd'} className='bg-white' />

          <Select>
            <SelectTrigger className='w-full bg-white'>
              <SelectValue placeholder='Select a Service' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Service</SelectLabel>
                <SelectItem value='payment'>Payment</SelectItem>
                <SelectItem value='support'>Support</SelectItem>
                <SelectItem value='billing'>Billing</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button className='w-full'>
            {' '}
            <UserPlus /> Add Customer
          </Button>
        </div>
        <div className='flex-7 bg-stone-100 rounded-sm p-3'>
          <h2 className='text-blue-400 font-bold text-2xl'>Current Queue</h2>

          <ServiceQueue />

          <ServiceQueue />

          <ServiceQueue />
        </div>
      </div>
    </main>
  );
}
export default Queue;
