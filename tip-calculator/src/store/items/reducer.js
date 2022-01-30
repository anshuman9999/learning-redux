import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED,
  ITEM_REMOVED
} from './actions';
import produce from 'immer';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Big Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, { type, payload }) => {
  if (type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...payload };
    state.push(item);
  }

  if (type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== payload.uuid);
  }

  if (type === ITEM_PRICE_UPDATED) {
    const { uuid, price } = payload;
    const item = state.find((item) => item.uuid === uuid);
    item.price = parseInt(price, 10);
  }

  if (type === ITEM_QUANTITY_UPDATED) {
    const { uuid, quantity } = payload;
    const item = state.find((item) => item.uuid === uuid);
    item.quantity = parseInt(quantity, 10);
  }
}, initialItems);

export default reducer;
