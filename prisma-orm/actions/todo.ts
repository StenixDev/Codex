'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type ActionState = {
  message: string | null;
};

export async function submitTask(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const task = formData.get('task') as string | null;

  if (!task || task.trim().length === 0) {
    return { message: 'tasks is required' };
  }

  await prisma.todo.create({
    data: {
      task,
    },
  });

  redirect('/todo');

  return { message: `The task is, ${task}!` };
}

export async function getTask() {
  return prisma.todo.findMany();
}
