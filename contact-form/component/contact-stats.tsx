import { getContactStats } from '@/action';
import { Card } from '@/components/ui/card';

async function ContactStats() {
  const stats = await getContactStats();
  return (
    <div className='flex gap-2'>
      <Card className='flex-1 px-4'>Total: {stats.total} </Card>
      <Card className='flex-1 px-4'>New: {stats.new}</Card>
      <Card className='flex-1 px-4'>Read: {stats.read} </Card>
      <Card className='flex-1 px-4'>Replied: {stats.replied} </Card>
    </div>
  );
}
export default ContactStats;
