// app/xpost/page.tsx
import prisma from '@/lib/prisma'; // default import

export default async function Page() {
  console.log('page has been rendered');

  const xPost = await prisma.xPost.findMany();

  console.log(xPost);

  return <div>x</div>;
}
