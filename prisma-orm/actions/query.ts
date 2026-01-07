'use server';

import prisma from '@/lib/prisma';

export async function createPost(title: string, content: string) {
  const post = await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  return {
    success: true,
    data: post,
  };
}
