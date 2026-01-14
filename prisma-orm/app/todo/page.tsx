import { getTask } from '@/actions/todo';
import TheForm from './_components/form';
import { Modal } from './_components/modal';

async function Page() {
  const data = await getTask();

  console.log(data);
  return (
    <div className='w-xl mx-auto pt-20'>
      <TheForm />
      <h1 className='text-3xl font-bold my-5'>Tasks</h1>
      {data.map((data) => (
        <div key={data.id} className='flex justify-between'>
          <p>{data.task}</p>
          <Modal task={data.task} />
        </div>
      ))}
    </div>
  );
}
export default Page;
