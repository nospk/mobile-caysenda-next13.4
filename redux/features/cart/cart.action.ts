import { addCart, reset } from './cart.slice';

// Action creators thủ công
export const addNewCart = () => {
  return addCart();
};

export const resetCart = () => {
  return reset();
};
