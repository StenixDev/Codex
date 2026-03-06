'use server';

type ActionState = {
  message: string;
};

export async function handleSubmit(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const name = formData.get('name');

  return {
    message: `Hello ${name}`,
  };
}
