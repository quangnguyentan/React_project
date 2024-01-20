import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { navigation } from "../../../utils/constant";
import path from "../../../utils/path";
import { logout } from "../../../stores/actions/authAction";
import { apigetCurrent } from "../../../services/userService";

const HeaderMenu = () => {
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
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="flex items-start flex-4 py-2 justify-end relative ">
      {navigation.map((el) => {
        if (el.children) {
          return (
            <div className="relative " key={el.id}>
              <NavLink
                to={!isLoggedIn && `/${path.LOGIN}`}
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
                <ul className="absolute bg-white z-10 top-full left-[-120px] w-[250px] rounded-md shadow-md flex flex-col gap-2">
                  {el.children.map((child) => (
                    <li
                      onClick={() => {
                        if (child.id === 5) {
                          navigate("/");
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
              <div className="absolute top-[5px] right-[10px] bg-red-500 text-white rounded-full w-[20px] h-[20px] flex items-center justify-center text-xs">
                {cartItems.length || 0}
              </div>
            </NavLink>
          );
        }
      })}
    </div>
  );
};

export default HeaderMenu;
