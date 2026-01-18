import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counterSet, setCounterSet] = useState(0);
  return (
    <>
      <div className='text-center'>
        <h1 className='text-2xl my-5'>Counter is {counter}</h1>
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className='border p-2 m-1'
        >
          Increase
        </button>
        <button
          onClick={() => setCounter((prev) => Math.max(prev - 1, 0))}
          className='border p-2 m-1'
        >
          Decrease
        </button>
        <button onClick={() => setCounter(0)} className='border p-2 m-1'>
          Reset
        </button>
      </div>

      <div className='text-center'>
        <input
          onChange={(e) => setCounterSet(Number(e.target.value))}
          type='text'
          className='border p-2 m-1'
          value={counterSet}
        />
        <button
          onClick={() => {
            setCounter(counterSet);
            setCounterSet(0);
          }}
          className='border p-2 m-1'
        >
          Set {counterSet}
        </button>
      </div>
    </>
  );
}
export default Counter;
