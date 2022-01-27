import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set } from './actions';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  const resetHandler = () => dispatch(set(0));
  const incrementHandler = () => dispatch(increment());
  const decrementHandler = () => dispatch(decrement());

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={decrementHandler}>Decrement</button>
      </section>
    </main>
  );
};

export default Counter;
