import actionType from "../actions/actionType";
import { totalCart } from "../actions/cartAction";

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
      const { productId, quantities } = action.payload;
      console.log(productId);
      const updateCart = state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantities } : item
      );
      return {
        ...state,
        cartItems: updateCart,
      };
    case actionType.REMOVE_CART:
      console.log(action.payload);
      const updatedCart = state.cartItems.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCart,
      };
    case actionType.REMOVE_ALL_CART:
      return {
        ...state,
        cartItems: [],
      };
    case actionType.TOTAL_CART:
      return {
        ...state,
        totalCart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
