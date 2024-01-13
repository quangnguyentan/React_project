import React from "react";
import { Link, NavLink } from "react-router-dom";
import path from "../../../utils/path";

const Slidebar = () => {
  return (
    <div className="flex-col flex w-full  ">
      <p className="font-semibold px-2 py-2 text-sm">Danh mục</p>
      <div className="py-2 mx-2  hover:rounded-lg hover:bg-gray-400">
        <Link
          to={`/${path.DETAILS_PRODUCT}`}
          className="flex gap-2 items-center "
        >
          <img
            className="w-[32px] h-[32px]"
            src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp"
            alt=""
          />
          <p>Đồ chơi - Mẹ & Bé</p>
        </Link>
      </div>
    </div>
  );
};

export default Slidebar;
