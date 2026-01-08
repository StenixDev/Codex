import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';

async function Page() {
  const xPosts = await prisma.xPost.findMany();

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-black'>Posts</h1>
        <Button className='cursor-pointer'>New Post</Button>
      </div>

      {xPosts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
export default Page;
