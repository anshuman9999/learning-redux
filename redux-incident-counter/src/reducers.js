import { DECREMENT, INCREMENT, SET } from './actions';

export const initialState = {
  count: 120
};

export const reducer = (state = initialState, { type, payload }) => {
  if (type === INCREMENT) return { count: state.count + 1 };
  if (type === DECREMENT) return { count: state.count - 1 };

  if (type === SET) return { count: parseInt(payload, 10) };

  return state;
};
