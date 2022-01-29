import { ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_REMOVED } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Big Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, { type, payload }) => {
  if (type === ITEM_ADDED) {
    return [...state, { uuid: id++, quantity: 1, ...payload }];
  }

  if (type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== payload.uuid);
  }

  if (type === ITEM_PRICE_UPDATED) {
    const { uuid, price } = payload;
    return state.map((item) => {
      if (item.uuid === uuid) {
        return { ...item, price: price };
      }

      return item;
    });
  }

  return state;
};

export default reducer;
