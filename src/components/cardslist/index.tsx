import { useContext, useEffect, useState } from "react";
import Card from "../common/card";
import Header from "../landing_component/header";
import axios from "axios";
import { UserContext } from "../context";

export default function CardList() {
  const [cardList, setCardList] = useState<any>([]);
  const { user }: any = useContext(UserContext);
  useEffect(() => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  return (
    <>
      <div className="bg-gray-100">
        <Header />
        <div className="bg-[#fff] p-10 py-[120px] sm:py-[150px] lg:py-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardList.map((card: any) => (
            <Card
              name={card.name}
              image={card.image_url}
              jobTitle={card.job_title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
