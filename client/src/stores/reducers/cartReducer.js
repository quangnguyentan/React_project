import actionType from "../actions/actionType";

const init = {
  cartItems: [],
  total: 0,
  totalPrice: 0,
};

const cartReducer = (state = init, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case actionType.UPDATE_QUANTITY:
      const { productId, quantity } = action.payload;
      const updateCart = state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      return {
        ...state,
        cartItems: updateCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
