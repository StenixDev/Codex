'use client';

import { handleSubmit } from './action';
import { useActionState } from 'react';
const initialState = { message: '' };
function Home() {
  const [state, formAction] = useActionState(handleSubmit, initialState);

  return (
    <div>
      {state.message && <p>{state.message}</p>}
      <form action={formAction}>
        <input type='text' name='name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default Home;
