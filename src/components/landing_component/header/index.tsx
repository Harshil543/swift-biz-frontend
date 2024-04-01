import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { useContext, useEffect, useState } from "react";
import Logo from "../../common/logo";
import Button from "../../common/button";
import { UserContext } from "../../context";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const { user, logOut }: any = useContext(UserContext);
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

  const Logout = () => {
    logOut();
    navigate("/");
  };

  return (
    <header>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
        <div
          className={`z-[100] flex absolute w-[100%] right-0 items-center justify-between h-16 lg:h-20 ${
            isSticky ? styles.issticky : ""
          }`}
        >
          <div className="ml-10">
            <Logo marginLeft="40px" height="80px" />
          </div>
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
          {!user?.id ? (
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
          ) : (
            <div className="mr-10 ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Button label="Log out" onClick={() => Logout()} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
