import { useEffect, useState } from "react";
import Card from "../common/card";
import Header from "../landing_component/header";
import axios from "axios";
import { SkeletonC } from "../common/skeleton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CardList() {
  const [cardList, setCardList] = useState<any>([]);
  const user = useSelector((state: any) => state.auth.user);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
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
  const arrayIndexesAsKeys: any = {
    arrayIndexesAsKeys: true,
    delimiter: ["id", "name", "job_title", "company"]
  };

  return (
    <>
      <div className="bg-gray-100 h-[100vh]">
        <Header array={cardList} dataToConvert={arrayIndexesAsKeys} />
        <div className="bg-[#f2f6f8]  p-10 py-[120px] sm:py-[150px] lg:py-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <SkeletonC />
          ) : (
            cardList.map((card: any) => (
              <div key={card.id}>
                <Card
                  name={card.name}
                  image={card.image_url}
                  jobTitle={card.job_title}
                  onClick={() => {
                    navigate(`/cards-details/${card.id}`);
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
