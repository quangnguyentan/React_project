import React, { useEffect, useState } from "react";
import { Footer, Slidebar } from "../../organisms";
import Banner from "../../organisms/banner";
import { useLocation } from "react-router-dom";
import path from "../../../utils/path";
import Product from "../../organisms/Product";

const Home = () => {
  const location = useLocation();

  return (
    <div className="w-main flex gap-6 mt-3   ">
      <div className="flex-2 flex rounded-lg  bg-opacity-90 bg-red-500 mx-8 overflow-y-scroll  whitespace-nowrap scroll-smooth ">
        <Slidebar />
      </div>
      <div className="flex flex-col justify-start items-start flex-8 rounded-lg bg-opacity-90 ">
        <div className="flex flex-col ">
          <Banner />
          <Product />
        </div>
        {location.pathname.slice(1) === path.HOME ? <Footer /> : ""}
      </div>
    </div>
  );
};

export default Home;
