import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
const routeData = [
  {
    label: "About",
    path: "about",
  },
  {
    label: "Post",
    path: "posts",
  },
  {
    label: "Contact",
    path: "contact",
  },
  {
    label: "Products",
    path: "products",
  },
  {
    label: "Foods",
    path: "foods",
  },
  {
    label: "Orders",
    path: "orders",
  },
  {
    label: "Shop",
    path: "shop",
  },
];

const Header = () => {
  return (
    <div className="navbar  bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {routeData.map((route) => (
              <ActiveLink key={route.path}>
                <Link to={route.path}>{route.label}</Link>
              </ActiveLink>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routeData.map((route) => (
            <ActiveLink key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </ActiveLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
