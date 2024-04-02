import { useContext, useEffect, useState } from "react";
import Card from "../common/card";
import Header from "../landing_component/header";
import axios from "axios";
import { UserContext } from "../context";
import SkeletonC from "../common/skeleton";

export default function CardList() {
  const [cardList, setCardList] = useState<any>([]);
  const { user }: any = useContext(UserContext);
  console.log(user);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios
      .request({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/cards/${user.id}`,
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      })
      .then((response) => {
        if (response.data.status === 200) {
          setCardList(response.data.data);
        } else {
          // showError("Error", response.data.message);
        }
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  return (
    <>
      <div className="bg-gray-100 h-[100vh]">
        <Header />
        <div className="bg-[#f2f6f8]  p-10 py-[120px] sm:py-[150px] lg:py-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <SkeletonC />
          ) : (
            cardList.map((card: any) => (
              <>
                <Card
                  name={card.name}
                  image={card.image_url}
                  jobTitle={card.job_title}
                />
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
}
