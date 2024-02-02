import React from "react";
import { Link } from "react-router-dom";
import path from "../../../../utils/path";

const Notification = () => {
  return (
    <div>
      <h3 className="text-2xl">Thông báo của tôi</h3>
      <div className="w-[98%] h-[250px] flex flex-col bg-white rounded-xl items-center justify-center mb-2 ">
        <img
          src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg"
          className="w-[160px] h-[173px]"
        ></img>
        <h3>Chưa có thông báo</h3>
        <Link to={`/${path.HOME}`}>
          <button className="bg-yellow-300 p-2 pl-4 pr-4 rounded-xl">
            Tiếp tục mua sắm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Notification;
