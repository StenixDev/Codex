import { SuccessToast } from '@/components/popup';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};
async function Page({ searchParams }: PageProps) {
  const xPosts = await prisma.xPost.findMany();

  async function handleSubmit(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    await prisma.xPost.create({
      data: {
        title,
        description,
      },
    });

    redirect('/dashboard/posts?success=1');
  }

  return (
    <div>
      <form action={handleSubmit} className='flex flex-col max-w-xs space-y-2'>
        <input
          type='text'
          name='title'
          placeholder='enter your title'
          className='border p-1'
        />

        <input
          type='text'
          name='description'
          placeholder='Your description'
          className='border p-1'
        />

        <Button className='cursor-pointer'>Submit</Button>
      </form>
      <hr className='my-5' />
      <h2>The Posts</h2>
      {xPosts.map((post) => (
        <Badge key={post.id} className='m-1'>
          {post.title}
        </Badge>
      ))}
      <SuccessToast />
    </div>
  );
}
export default Page;
