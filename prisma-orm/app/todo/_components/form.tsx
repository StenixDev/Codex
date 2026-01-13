'use client';

import { useActionState } from 'react';
import { submitTask, ActionState } from '@/actions/todo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const initialState: ActionState = {
  message: null,
};

function TheForm() {
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
        <Button className='w-full'>
          {isPending ? 'submitting' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}
export default TheForm;
