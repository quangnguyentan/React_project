import React, { useEffect, useState } from "react";
import { apigetCurrent } from "../../../services/userService";
import { useSelector } from "react-redux";
import { customerTabs } from "../../../utils/constant";

const Navbar = () => {
  const [userData, setUserData] = useState({});
  const { token, isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    const fetchUser = async () => {
      let response = await apigetCurrent(token);
      console.log(response);
      if (response?.err === 0) {
        setUserData(response?.response);
      } else {
        setUserData({});
      }
    };
    fetchUser();
  }, [isLoggedIn]);
  return (
    <div className=" flex flex-col px-4  ">
      <div className="flex gap-2">
        <img
          src={userData?.avatar}
          alt="avatar"
          className="w-[45px] h-[45px]  border rounded-[50%]"
        />
        <div className="flex flex-col">
          Tài khoản của
          <span className="font-medium text-lg">{userData?.fullname}</span>
        </div>
      </div>
      {customerTabs.map((el) => (
        <div className="flex px-2 py-2 items-center gap-4" key={el.id}>
          {el.icon}
          <span>{el.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
