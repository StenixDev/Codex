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

function FormQueue({ onAdd }) {
  return (
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
  );
}
export default FormQueue;
