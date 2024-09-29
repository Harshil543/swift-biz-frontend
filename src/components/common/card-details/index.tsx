import { useParams } from "react-router-dom";
import Logo from "../logo";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { HeadingSkeleton, ImageSkeleton, JobSkeleton } from "../skeleton";

export default function CardDetails() {
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState<any>();
  const user = useSelector((state: any) => state.auth.user);

  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios
      .request({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}api/cards/${user.id}/${id}`,
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      })
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response.data.data, "response.data.data");
          setCardDetails(response.data.data);
        } else {
          // showError("Error", response.data.message);
        }
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, user]);

  return (
    <div
      style={{
        background: "linear-gradient(126.43deg,#eaf9fd 13.42%,#ebe0f9 105.9%)"
      }}
      className="rounded-xl m-4"
    >
      <div className="ml-4">
        <div className="flex justify-center">
          <Logo height={130} />
        </div>

        <div className="flex flex-col justify-start items-center sm:justify-start sm:items-center">
          {isLoading ? (
            <ImageSkeleton />
          ) : (
            <img
              className="rounded-xl lg:ml-5 w-[50%] lg:h-[384px] sm:h-[100px] "
              src={`${cardDetails?.image_url}`}
              alt="card details"
            />
          )}
          <div className="flex p-10 justify-center items-start w-full sm:w-[50%] flex-col">
            {isLoading ? (
              <HeadingSkeleton />
            ) : (
              <h1 className="text-5xl font-bold text-gray-800 text-center sm:text-left">
                {cardDetails?.name}
              </h1>
            )}
            {isLoading ? (
              <JobSkeleton />
            ) : (
              <h2 className="text-2xl mb-1 text-gray-600 ml-1 sm:text-center">
                {cardDetails?.job_title}
              </h2>
            )}
            {isLoading ? (
              <JobSkeleton />
            ) : (
              <h2 className="text-xl mb-1 text-gray-600 text-center sm:text-left">
                <i className="pi pi-mobile"></i> {cardDetails?.phone_number}
              </h2>
            )}
            {isLoading ? (
              <JobSkeleton />
            ) : (
              <h2 className="text-xl mb-1 text-gray-600 flex sm:text-left">
                <i className="pi pi-address-book mt-2 mr-2"></i>
                <div>{cardDetails?.address}</div>
              </h2>
            )}

            {isLoading ? (
              <JobSkeleton />
            ) : (
              <h2 className="text-xl text-gray-600 text-center sm:text-left">
                <i className="pi pi-envelope"></i> {cardDetails?.email}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
