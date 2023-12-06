import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Navigate, useLocation } from "react-router-dom";
import { navigation } from "../../../utils/constant";
import path from "../../../utils/path";
import { logout } from "../../../stores/actions/authAction";
import { apigetCurrent } from "../../../services/userService";

const Navigation = () => {
  const { isLoggedIn, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(false);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     let response = await apigetCurrent(token);
  //     console.log(response);
  //     if (response?.err === 0) {
  //       setUserData(response?.response);
  //     } else {
  //       setUserData({});
  //     }
  //   };
  //   fetchUser();
  // }, [isLoggedIn]);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  return (
    <div className="flex items-start flex-4 py-2 justify-end ">
      {navigation.map((el) => {
        if (el.children) {
          return (
            <div className="relative " key={el.id}>
              <NavLink
                to={!isLoggedIn && `/${path.LOGIN}`}
                key={el.id}
                className={({ isActive }) =>
                  isActive
                    ? `${el.css}text-blue-500 hover:bg-blue-300 `
                    : `hover:bg-gray-200 text-gray-500 ${el.css}`
                }
                onClick={() => setShowDropdown(!showDropdown)}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
              >
                <img
                  src={el.image}
                  className="w-[24px] h-[24px] fill-blue-500"
                  alt={el.name}
                />
                <span className="text-sm font-medium">{el.value}</span>
              </NavLink>

              {showDropdown ? (
                <ul className="absolute bg-white z-10 top-full left-[-120px] w-[250px] rounded-md shadow-md ">
                  {el.children.map((child) => (
                    <li
                      onClick={() => {
                        if (child.id === 5) {
                          dispatch(logout());
                        }
                        setShowDropdown(false);
                      }}
                      key={child.id}
                    >
                      <NavLink
                        to={child.path}
                        key={el.id}
                        className={({ isActive }) =>
                          isActive
                            ? `hover:bg-gray-200 text-gray-500 w-full hover:rounded-md flex gap-1 justify-start h-[40px] `
                            : ""
                        }
                      >
                        <span className="text-sm font-medium px-4 py-4">
                          {child.value}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="hidden"></div>
              )}
            </div>
          );
        } else {
          return (
            <NavLink
              to={
                el.id === 1
                  ? `/${path.HOME}`
                  : isLoggedIn
                  ? el.path
                  : `/${path.LOGIN}`
              }
              key={el.id}
              className={({ isActive }) =>
                isActive
                  ? `${el.css}text-blue-500 hover:bg-blue-300 `
                  : `hover:bg-gray-200 text-gray-500 ${el.css}`
              }
            >
              <img
                src={el.image}
                className="w-[24px] h-[24px] fill-blue-500"
                alt={el.name}
              />
              <span className="text-sm font-medium">{el.value}</span>
            </NavLink>
          );
        }
      })}
    </div>
  );
};

export default Navigation;
