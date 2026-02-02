import { useCounterStore } from '../store/counterStore';

function Counter() {
  const { count, inc, dec, reset } = useCounterStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
      <button onClick={dec}>one down</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default Counter;
