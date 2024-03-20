import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#fff]">
      <section className="py-[120px] sm:py-[150px] lg:py-[80px]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-6xl">
                experience smart world, with{" "}
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[20px] border-[#61abff]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-6xl">
                    Swift Biz.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Link
                  to="#"
                  title=""
                  className="inline-flex text-lg items-center rounded-xl justify-center px-6 py-2.5 text-base font-semibold text-white transition-all duration-200 bg-[#037cff] hover:bg-[#4a7ede]"
                  role="button"
                >
                  Start exploring
                </Link>

                {/* <Link
                  to="#"
                  title=""
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <svg
                    className="w-10 h-10 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#4a8fde"
                      stroke="#4a8fde"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch video
                </Link> */}
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://img.freepik.com/free-vector/qr-code-concept-illustration_114360-5773.jpg?t=st=1710876658~exp=1710880258~hmac=de527791b1ff9539c15e20a5aa132054ec568dc65fa0e2a9f7df8e4911c6be64&w=740"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
