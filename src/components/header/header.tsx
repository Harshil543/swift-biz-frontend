import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
        <div
          className={`z-[100] flex absolute w-[100%] right-0 items-center justify-between h-16 lg:h-20 ${
            isSticky ? styles.issticky : ""
          }`}
        >
          <div className="flex-shrink-0">
            <Link to="/login" className="flex">
              <img className="w-auto h-8 ml-10" src="" alt="logo" />
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex p-1 mr-10 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="hidden mr-10 ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              to="#"
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              Features
            </Link>
            <Link
              to="#"
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              Solutions
            </Link>
            <Link
              to="#"
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              Resources
            </Link>
            <Link
              to="#"
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              Pricing
            </Link>
            <div className="w-px h-5 bg-black/20"></div>
            {/* <Link
              to="/login"
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              Log in
            </Link> */}
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-5 py-1.5 text-base font-semibold text-white bg-[#037cff] border-2 bg-[#037cff] hover:opacity-0.5  transition-all duration-200 rounded-xl"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
