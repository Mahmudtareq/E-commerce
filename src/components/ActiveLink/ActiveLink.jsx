/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  const activeClassName =
    "text-green-200 no-underline hover:bg-red-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
  const inActiveClassName =
    "text-gray-600 no-underline hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? activeClassName : inActiveClassName
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
