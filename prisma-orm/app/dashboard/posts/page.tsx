import Post from '@/components/dashboard/post';

import prisma from '@/lib/prisma';

async function Page() {
  const xPosts = await prisma.xPost.findMany();

  return <Post posts={xPosts} />;
}
export default Page;
