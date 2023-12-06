import React from "react";
import { Slidebar } from "../../organisms";
import Banner from "../../organisms/banner";

const Home = () => {
  return (
    <>
      <div className="flex-2 flex  rounded-lg bg-opacity-90 bg-white ">
        <Slidebar />
      </div>
      <div className="flex flex-8 rounded-lg bg-opacity-90 bg-white">
        <Banner />
      </div>
    </>
  );
};

export default Home;
