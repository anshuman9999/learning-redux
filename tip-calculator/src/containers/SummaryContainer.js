import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
  let subtotal = 0;
  let tipAmount = 0;

  state.items.forEach((item) => {
    subtotal += item.quantity * item.price;
  });

  tipAmount = (subtotal * state.tipPercentage) / 100;

  return {
    subtotal,
    tipAmount,
    total: subtotal + tipAmount
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
