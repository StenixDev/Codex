import NotesClient from '@/components/NotesClient';
import dbConnect from '@/lib/db';

async function Home() {
  await dbConnect();
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-3'>CRUD APP</h1>
      <NotesClient />
    </div>
  );
}
export default Home;
