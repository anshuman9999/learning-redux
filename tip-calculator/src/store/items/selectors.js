import { createSelector } from 'reselect';

const selectItems = (state) => state.items;
const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubtotal = createSelector([selectItems], (items) => {
  let subtotal = 0;

  items.forEach((item) => {
    subtotal += item.quantity * item.price;
  });

  return subtotal;
});

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPercentage) => (subtotal * tipPercentage) / 100
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);
