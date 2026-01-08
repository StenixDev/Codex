// app/xpost/page.tsx
import { createPost } from '@/actions/query';
import prisma from '@/lib/prisma'; // default import

export default async function Page() {
  console.log('page has been rendered');

  const xPost = await prisma.xPost.findMany();

  console.log(xPost);

  return (
    <div>
      {xPost.map((post) => (
        <p key={post.id}>
          {post.title} {post.description}
        </p>
      ))}

      <hr />

      <form action={createPost}>
        <input type='text' name='title' id='title' placeholder='enter title' />
        <input
          type='text'
          name='description'
          id='description'
          placeholder='enter description'
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
