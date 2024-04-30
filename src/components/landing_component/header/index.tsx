import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import Logo from "../../common/logo";
import Button from "../../common/button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/Auth/authReducer";
import { useLocation } from "react-router-dom";
import { json2csv } from "json-2-csv";

export default function Header({ isLanding, array, dataToConvert }: any) {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch<any>();

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
    dispatch(logout());
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

          {isLanding && (
            <>
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
                  to="/cards-list"
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  Dashboard
                </Link>
                <div className="w-px h-5 bg-black/20"></div>
              </div>
            </>
          )}

          <div className="mr-10 lg:space-x-10">
            {!user?.id ? (
              <Button label="Log in" onClick={() => navigate("/login")} />
            ) : (
              <div className="flex">
                {/* <Avatar
                  label="P"
                  image={`/images/avatar/${user.image_url}`}
                  className="bg-[#037cff] text-white m-4"
                  shape="circle"
                  size="large"
                /> */}

                <Button label="Log out" onClick={() => Logout()} />
                {location.pathname === "/cards-list" && (
                  <Button
                    margin="m-4"
                    label="Export to CSV"
                    onClick={() => {
                      json2csv(array);
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
