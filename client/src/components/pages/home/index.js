import React, { useEffect, useState } from "react";
import { Footer, Slidebar } from "../../organisms";
import Banner from "../../organisms/Banner";
import { useLocation } from "react-router-dom";
import path from "../../../utils/path";

const Home = () => {
  const location = useLocation();

  return (
    <div className="w-main flex gap-6 mt-3 ">
      <div className="flex-2 flex rounded-lg bg-opacity-90 bg-white ">
        <Slidebar />
      </div>
      <div className="flex flex-col justify-start items-start flex-8 rounded-lg bg-opacity-90 bg-white">
        <Banner />
        {location.pathname.slice(1) === path.HOME ? <Footer /> : ""}
      </div>
    </div>
  );
};

export default Home;
