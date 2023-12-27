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
} from "./pages/index";
import path from "./utils/path";
import React from "react";
import { Navbar } from "./components/organisms";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          {/* <Route path="*" element={<Address />} /> */}
          <Route path={path.HOME} element={<Home />} />
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
        </Route>

        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.LOGIN_SUCCESS} element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
