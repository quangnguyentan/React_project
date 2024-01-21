import React from "react";
import logo from "../../../assets/images/logo.png";
import icons from "../../../utils/icons";
import { Link } from "react-router-dom";
import path from "../../../utils/path";
import { Button, Input } from "../../atoms";
const { IoIosSearch } = icons;
const Header = () => {
  return (
    <div className="flex w-full ">
      <div className="flex flex-6 ">
        <Link to={`/${path.HOME}`}>
          <img
            src={logo}
            alt="logo"
            className="w-[72px] h-[72px] ml-[30px] mr-[50px] my-[10px] object-cover"
          />
        </Link>
        <div className="flex  pitems-center w-[749px] h-[40px] my-[10px] border border-gray-200 rounded-lg placeholder:text-gray-500 justify-between">
          <div className="flex py-2 gap-2">
            <IoIosSearch size={24} className="text-gray-500 ml-[18px]" />
            <Input
              style={"w-[618px] h-[21px] outline-none"}
              nameKey={"Bạn tìm gì hôm nay"}
            />
            {/* <input
              type="text"
              placeholder="Bạn tìm gì hôm nay"
              className="w-[618px] h-[21px] outline-none "
            /> */}
          </div>
          <div className="flex items-center justify-center ml-[-16px] ">
            <span className="w-[1px] h-[24px] bg-gray-200 "></span>
            <Button
              style={
                "text-sm text-blue-600 w-[90px] h-[38px] hover:bg-blue-400 hover:rounded-r-md"
              }
              name="Tìm kiếm"
            />
            {/* <button className="text-sm text-blue-600 w-[90px] h-[38px] hover:bg-blue-400 hover:rounded-r-md">
              Tìm kiếm
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
