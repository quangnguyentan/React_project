import actionType from "../actions/actionType";

const initState = {
  newData: null,
  errorMessage: "",
};

const productReducers = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT:
      return {
        ...state,
        data: action?.data || {},
      };
    case actionType.GET_PRODUCT_BY_ID:
      return {
        ...state,
        data: action?.data || {},
      };
    default:
      return state;
  }
};
export default productReducers;
