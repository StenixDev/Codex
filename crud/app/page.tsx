import dbConnect from '@/lib/db';

async function Home() {
  await dbConnect();
  return <div>Home</div>;
}
export default Home;
