'use server';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export type ActionState = {
  success: boolean;
  errors?: {
    task?: string;
  };
};

export async function submitTask(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const task = formData.get('task') as string;

  const errors: ActionState['errors'] = {};

  if (!task || task.trim().length === 0) {
    errors.task = 'task is invalid';
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  await prisma.todo.create({
    data: {
      task,
    },
  });

  redirect('/todo');

  return { success: true };
}

export async function getTask() {
  return prisma.todo.findMany();
}

export async function updateTask() {
  await prisma.todo.update({
    where: { id: 1 },
    data: {
      task: 'updated! - hard coded',
    },
  });

  console.log('updating');
}
