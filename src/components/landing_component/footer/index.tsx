import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../common/logo";
import Button from "../../common/button";
import Input from "../../common/input";

export default function Footer() {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Logo height="5rem" margin="auto" />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <Link
                  to="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <img
                    src="/images/twitter.svg"
                    alt="git"
                    className="w-5 h-5"
                  />
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <img
                    src="/images/facebook.svg"
                    alt="git"
                    className="w-5 h-5"
                  />
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <img
                    src="/images/instagram.svg"
                    alt="git"
                    className="w-5 h-5"
                  />
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <img src="/images/github.svg" alt="git" className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Features{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Works{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Career{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Customer Support{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Delivery Details{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Terms & Conditions{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                />
              </div>
              <Button label="Subscribe" />
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2021, All Rights Reserved by Swift Biz
        </p>
      </div>
    </section>
  );
}
