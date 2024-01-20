import actionType from "./actionType";

export const addToCart = (product, quantity) => {
  const productWithQuantity = { ...product, quantity: quantity };
  return {
    type: actionType.ADD_TO_CART,
    payload: productWithQuantity,
  };
};
export const updateQuantityAction = (productId, quantities) => {
  return {
    type: actionType.UPDATE_QUANTITY,
    payload: {
      productId,
      quantities,
    },
  };
};
export const removeToCart = (productId) => {
  return {
    type: actionType.REMOVE_CART,
    payload: productId,
  };
};
export const removeAllCart = () => {
  return {
    type: actionType.REMOVE_ALL_CART,
  };
};
export const totalCart = (totalCart) => {
  return {
    type: actionType.TOTAL_CART,
    payload: totalCart,
  };
};
