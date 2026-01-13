'use server';

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

  return { message: `The task is, ${task}!` };
}
