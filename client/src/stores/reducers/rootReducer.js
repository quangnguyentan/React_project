import authReducer from "./authReducer";
import productReducers from "./productReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import cartReducer from "./cartReducer";

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};
const authConfig = {
  ...commonConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"],
};
const cartConfig = {
  ...commonConfig,
  key: "cart",
  whitelist: ["cartItems"], 
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
  product: productReducers,
  cart: persistReducer(cartConfig, cartReducer),
});
export default rootReducer;
