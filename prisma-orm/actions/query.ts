'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface CreatePostResult {
  success: boolean;
  data?: {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  };
  error?: string;
}

export async function createPost(
  formData: FormData
): Promise<CreatePostResult> {
  try {
    const title = formData.get('title');
    const description = formData.get('description');

    // Type validation
    if (typeof title !== 'string' || typeof description !== 'string') {
      return {
        success: false,
        error: 'Invalid input: title and description must be strings',
      };
    }

    // Optional: Additional validation
    if (!title.trim() || !description.trim()) {
      return {
        success: false,
        error: 'Title and description cannot be empty',
      };
    }

    const post = await prisma.xPost.create({
      data: {
        title,
        description,
      },
    });

    console.log('data inserted successfully');

    revalidatePath('/xpost'); // Change to your posts page path
    redirect('/xpost');

    return {
      success: true,
      data: post,
    };
  } catch (error) {
    console.error('Error creating post:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
export type FormState = {
  success?: boolean;
  errors?: string[];
};
export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  await new Promise((r) => setTimeout(r, 1500)); // simulate request

  const fullname = formData.get('fullname');
  const email = formData.get('email');
  const phone = formData.get('tel');
  const timestamp = formData.get('timestamp');
  const total = formData.get('total');

  const errors: string[] = [];

  if (!fullname) {
    errors.push('Fullname is required');
  }

  if (!email) {
    errors.push('Email is required');
  }

  if (!phone) {
    errors.push('Phone is required');
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return { success: true };
}
