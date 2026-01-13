'use client';

import { useActionState } from 'react';
import { submitTask, ActionState } from '@/actions/todo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const initialState: ActionState = {
  message: null,
};

function Todo() {
  const [state, formAction, isPending] = useActionState(
    submitTask,
    initialState
  );
  return (
    <div>
      <div>
        {state.message && (
          <p className='text-sm text-gray-700'>{state.message}</p>
        )}
      </div>
      <form action={formAction} className='max-w-xl space-y-5'>
        <Input name='task' placeholder='Enter Task' />
        <Button className='w-full'>Submit</Button>
      </form>
      <h1 className='text-3xl font-bold my-5'>Tasks</h1>
      {isPending ? 'submitting' : 'Submit'}
    </div>
  );
}
export default Todo;
