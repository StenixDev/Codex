import { findTask } from '@/actions/todo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const data = await findTask(parseInt(id));

  return (
    <div>
      <form className='w-xs mx-auto'>
        <Label className='text-3xl my-5'>Edit Task</Label>
        <Input
          className='rounded-none'
          type='text'
          name='task'
          id='task'
          defaultValue={data?.task}
        />
        <Button className='w-full rounded-none'>Save Changes</Button>
      </form>
    </div>
  );
}
