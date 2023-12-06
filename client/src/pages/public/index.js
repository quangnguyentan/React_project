import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/molecules/navbar-menu";
import { Header } from "../../components/organisms";
const Public = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex w-full bg-opacity-90 bg-white">
        <Header />
      </div>
      <div className="w-full flex items-center flex-col ">
        <Outlet />
      </div>
    </div>
  );
};

export default Public;
