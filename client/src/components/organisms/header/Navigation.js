// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { navigation } from "../../../utils/constant";
// import { Login } from "../../../containers";
// import path from "../../../utils/path";

// const Navigation = () => {
//   const [isLoggin, setIsLoggin] = useState(false);
//   return (
//     <div className="flex items-start flex-4 py-2 justify-end ">
//       {navigation.map((el) => (
//         <NavLink
//           to={
//             el.id === 1
//               ? `/${path.HOME}`
//               : isLoggin
//               ? el.path
//               : `/${path.LOGIN}`
//           }
//           key={el.id}
//           className={({ isActive }) =>
//             isActive
//               ? `${el.css}text-blue-500 hover:bg-blue-300 `
//               : `hover:bg-gray-200 text-gray-500 ${el.css}`
//           }
//         >
//           <img
//             src={el.image}
//             className="w-[24px] h-[24px] fill-blue-500"
//             alt={el.name}
//           />
//           <span className="text-sm font-medium">{el.value}</span>
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default Navigation;
