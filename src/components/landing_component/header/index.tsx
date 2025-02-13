import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import Logo from "../../common/logo";
import Button from "../../common/button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/Auth/authReducer";
import { useLocation } from "react-router-dom";
import { exportCSVFile } from "../../../constant/functions";

export default function Header({
  isLanding,
  array,
  isSelected,
  setIsSelected,
  setSelectedCards,
  type,
  cardList
}: any) {
  const [isSticky, setIsSticky] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch<any>();
  const [isSelectedCardsAll, setIsSelectedCardsAll] = useState(true);
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

  const download = () => {
    setCsvData([]);
    setIsSelected(false);
    const header = {
      name: "name",
      job_title: "job_title",
      company: "company",
      phone_number: "phone_number",
      email: "email",
      website: "website",
      address: "address",
      comment: "comment"
    };
    exportCSVFile(header, csvData, "cards");
  };

  useEffect(() => {
    let itemsFormatted: any = [];
    array?.forEach((item: any) => {
      itemsFormatted?.push({
        name: item.name,
        job_title: item.job_title,
        company: item.company,
        phone_number: item.phone_number,
        email: item.email,
        website: item.website,
        address: item.address.replace(/,/g, ""),
        comment: item.comment
      });
    });
    setCsvData(itemsFormatted);
  }, [array]);

  return (
    <header>
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div
          className={`z-[100] flex absolute w-[100%] right-0 items-center justify-between h-16 lg:h-20 ${
            isSticky ? styles.isSticky : ""
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
              <div
                className={`flex justify-between ${
                  type === "card-list" ? "w-[20rem]" : ""
                }`}
              >
                {location.pathname === "/cards-list" ||
                  (location.pathname === "/admin-dashboard" && (
                    <>
                      <Button
                        icon={<i className="pi pi-pen-to-square"></i>}
                        label=""
                        onClick={() => {
                          setIsSelected(!isSelected);
                          setCsvData([]);
                          setSelectedCards([]);
                        }}
                      />
                      {user.role === "admin" && (
                        <Button
                          icon={<i className="pi pi-check-circle"></i>}
                          label=""
                          disabled={!isSelected}
                          onClick={() => {
                            setIsSelectedCardsAll(!isSelectedCardsAll);
                            setSelectedCards(
                              !isSelectedCardsAll ? [] : cardList
                            );
                          }}
                        />
                      )}
                      <Button
                        icon={<i className="pi pi-file-export"></i>}
                        label=""
                        onClick={() => {
                          download();
                        }}
                        disabled={csvData.length === 0}
                      />
                    </>
                  ))}
                <Button label="Log out" onClick={() => Logout()} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
