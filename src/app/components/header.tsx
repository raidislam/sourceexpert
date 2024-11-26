import Link from "next/link";
import Button from "./button";

export default function Header() {
  return (
    <div className="navbar bg-red-500 py-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="text-md">
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Project</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="/assets/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-40 text-white">
          <li className="text-md">
            <Link href="#">Home</Link>
          </li>
          <li className="text-md">
            <Link href="#">About Us</Link>
          </li>
          <li className="text-md">
            <Link href="#">Services</Link>
          </li>
          <li className="text-md">
            <Link href="#">Project</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button />
      </div>
    </div>
  );
}
