import { useSelector } from 'react-redux';
import { decrement, increment, set } from './actions';
import { useActions } from './useActions';

export const useCounter = () => {
  const count = useSelector((state) => state.count);
  const actions = { increment, decrement, set };

  const actionCreators = useActions(actions);

  return { count, ...actionCreators };
};
