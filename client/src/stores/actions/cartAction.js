import actionType from "./actionType";

export const addToCart = (product, quantity) => {
  const productWithQuantity = { ...product, quantity: quantity };
  return {
    type: actionType.ADD_TO_CART,
    payload: productWithQuantity,
  };
};
export const updateQuantityAction = (productId, quantity) => {
  return {
    type: actionType.UPDATE_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};
