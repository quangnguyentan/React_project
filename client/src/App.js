import { Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  Login,
  Public,
  LoginSuccess,
  Account,
  Address,
  Notification,
  Order,
  PaymentCard,
  MyAccount,
  NotFound,
  Cart,
  DetailsProduct,
  ProductCard,
  TopSeller,
  Payment,
} from "./pages/index";
import path from "./utils/path";
import React from "react";

function App() {
  return (
    <div className="overflow-hidden bg-gray-100">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.DETAILS_PRODUCT} element={<DetailsProduct />}>
            <Route path={path.TOP_SELLER} element={<TopSeller />} />
          </Route>
          <Route path={path.CHECKOUT}>
            <Route path={path.CART} element={<Cart />} />
            <Route path={path.PAYMENT} element={<Payment />} />
          </Route>
          <Route path={path.MYACCOUNT[0]} element={<MyAccount />}>
            <Route path={path.CUSTOMER} element={<Account />} />
            <Route path={path.ADDRESS} element={<Address />} />
            <Route path={path.NOFICATION} element={<Notification />} />
            <Route path={path.ORDERHISTORY} element={<Order />} />
            <Route path={path.PAYMENTCART} element={<PaymentCard />} />
          </Route>

          {path.MYACCOUNT[1] && (
            <Route path={path.MYACCOUNT[1]} element={<MyAccount />}>
              <Route path={path.ORDERHISTORY} element={<Order />} />
            </Route>
          )}
          {/* <Route path={path.DETAILS_PRODUCT} element={<Details_Product />} /> */}
          <Route path={path.PRODUCT_INFO} element={<ProductCard />} />
        </Route>

        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.LOGIN_SUCCESS} element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
