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

export async function handleCustomerDetailsSubmit(formData: FormData) {
  const rawFormData = {
    fullName: formData.get('fullname'),
    email: formData.get('email'),
    phone: formData.get('tel'),
    timestamp: formData.get('timestamp'),
    total: formData.get('total'),
  };
  console.log(rawFormData);
}
