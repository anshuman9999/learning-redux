import { connect } from 'react-redux';
import { MenuItem } from '../components/MenuItem';
import {
  itemPriceUpdated,
  itemQuantityUpdated,
  removeItem
} from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(itemPriceUpdated(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(itemQuantityUpdated(ownProps.uuid, quantity))
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
