import { ITEM_ADDED } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Big Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, { type, payload }) => {
  if (type === ITEM_ADDED) {
    return [...state, { uuid: id++, quantity: 1, ...payload }];
  }

  return state;
};

export default reducer;
