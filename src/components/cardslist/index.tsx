import React, { useEffect, useState } from "react";
import Card from "../common/card";
import Header from "../landing_component/header";
import axios from "axios";

export default function CardList() {
  const [cardList, setCardList] = useState<any>([]);
  useEffect(() => {
    axios
      .request({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/cards/1`,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExOTExMzcyLCJleHAiOjE3MTE5OTc3NzJ9.El49zhHbifIbGy4-_GrTgRC8jsGULA5sjDzcuZ3n4Ls"
        }
      })
      .then((response) => {
        if (response.data.status === 200) {
          setCardList(response.data.data);
          const user: any = localStorage.getItem("user");
          console.log(user.username);
        } else {
          // showError("Error", response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="bg-[#fff] p-10 py-[120px] sm:py-[150px] lg:py-[120px]">
        {cardList.map((card: any) => (
          <Card />
        ))}
      </div>
    </div>
  );
}
