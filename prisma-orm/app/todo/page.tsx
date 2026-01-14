import { getTask } from '@/actions/todo';
import TheForm from './_components/form';

async function Page() {
  const data = await getTask();

  console.log(data);
  return (
    <div className='w-xl mx-auto pt-20'>
      <TheForm />
      <h1 className='text-3xl font-bold my-5'>Tasks</h1>
      {data.map((data) => (
        <p key={data.id}>{data.task}</p>
      ))}
    </div>
  );
}
export default Page;
