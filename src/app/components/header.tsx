import Link from "next/link";
import Button from "./button";

export default function Header() {
  return (
    <div className="navbar py-4 bg-transparent relative z-50 pr-14 ">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Menu Toggle */}
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
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
        {/* Logo */}
        <a className="btn btn-ghost text-xl">
          <img src="/assets/logo.svg" alt="logo" />
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 space-x-8 text-white">
          <li className="font-inter font-medium text-md leading-[14px]">
            <Link href="#">Home</Link>
          </li>
          <li className="font-inter font-medium text-md leading-[14px]">
            <Link href="#">About Us</Link>
          </li>
          <li className="font-inter font-medium text-md leading-[14px]">
            <Link href="#">Services</Link>
          </li>
          <li className="font-inter font-medium text-md leading-[14px]">
            <Link href="#">Project</Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Button content="Contact Us" width="134" height="56" />
      </div>
    </div>
  );
}
