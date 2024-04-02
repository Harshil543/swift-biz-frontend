// import React, { useContext } from "react";
// import { UserContext } from "../../context";
import Logo from "../logo";

export default function CardDetails() {
  return (
    <div
      style={{
        background: "linear-gradient(126.43deg,#eaf9fd 13.42%,#ebe0f9 105.9%)"
      }}
      className="rounded-xl m-4 lg:h-[95vh]"
    >
      <div className="ml-4">
        <div className="flex justify-center">
          <Logo height={130} />
        </div>

        <div className="flex flex-col justify-start items-center sm:flex-row sm:justify-start sm:items-center">
          <img
            className="rounded-xl lg:ml-5 w-[70%] lg:h-[384px] sm:h-[100px] "
            src="https://atfxlambprrpulkkghjt.supabase.co/storage/v1/object/public/card-images/images/1711046527478-Screenshot%202024-03-21%20012050.png"
            alt="card details"
          />
          <div className="flex p-10 justify-center lg:h-[70vh] items-start w-full sm:w-[50%] flex-col">
            <h1 className="text-5xl font-bold mb-1 text-gray-800 text-center sm:text-left">
              Harshil Sondagar
            </h1>
            <h2 className="text-2xl mb-10 text-gray-600 ml-1 sm:text-center">
              Job Title
            </h2>
            <h2 className="text-xl mb-10 text-gray-600 text-center sm:text-left">
              <i className="pi pi-mobile"></i> 95095 63563
            </h2>
            <h2 className="text-xl mb-10 text-gray-600 flex sm:text-left">
              <i className="pi pi-address-book mt-2 mr-2"></i>
              <div>
                20098 Piney Point Rd, 20098 Piney Point Rd,20098 Piney Point Rd,
                Callaway MD 2062020098
              </div>
            </h2>
            <h2 className="text-xl mb-10 text-gray-600 text-center sm:text-left">
              <i className="pi pi-envelope"></i> sondagarharshil0@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
