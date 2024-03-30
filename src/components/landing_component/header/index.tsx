import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import Logo from "../../common/logo";
import Button from "../../common/button";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

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
          <Logo marginLeft="40px" height="80px" />
          <button
            type="button"
            className="inline-flex p-1 mr-10 text-black transition-all duration-200 lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <img
              className="block w-6 h-6"
              src="/images/lines.svg"
              alt="lines"
            />
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
            <Button label="Log in" onClick={() => navigate("/login")} />
          </div>
        </div>
      </div>
    </header>
  );
}
