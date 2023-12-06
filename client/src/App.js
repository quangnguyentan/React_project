import { Routes, Route } from "react-router-dom";
import {
  Astra,
  Home,
  Login,
  Public,
  LoginSuccess,
  Account,
} from "./pages/index";
import path from "./utils/path";
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.CUSTOMER} element={<Account />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.LOGIN_SUCCESS} element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
