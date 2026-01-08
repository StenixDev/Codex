'use client';
import { xPost } from '@/app/generated/prisma/client';
import { Button } from '@/components/ui/button';

interface xPostProps {
  posts: xPost[];
}
function Post({ posts }: xPostProps) {
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-black'>Posts</h1>
        <Button className='cursor-pointer'>New Post</Button>
      </div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
export default Post;
