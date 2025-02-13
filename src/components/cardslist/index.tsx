import { useEffect, useState } from "react";
import Card from "../common/card";
import Header from "../landing_component/header";
import axios from "axios";
import { SkeletonC } from "../common/skeleton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "primereact/checkbox";
import styles from "./index.module.scss";
export default function CardList() {
  const [cardList, setCardList] = useState<any>([]);
  const user = useSelector((state: any) => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState<any>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [counts, setCounts] = useState({
    totalCards: 0,
    totalTasks: 0
  });

  useEffect(() => {
    setIsLoading(true);
    const url =
      user.role === "admin"
        ? `${process.env.REACT_APP_BASE_URL}api/admin-cards`
        : `${process.env.REACT_APP_BASE_URL}api/cards/${user.id}`;
    axios
      .request({
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      })
      .then((response) => {
        if (response.data.status === 200) {
          setCardList(response.data.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    if (user.role === "admin") {
      axios
        .request({
          method: "get",
          url: `${process.env.REACT_APP_BASE_URL}api/total-counts`,
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        })
        .then((response) => {
          if (response.data.status === 200) {
            setCounts(response.data.data);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  const onCategoryChange = (e: any) => {
    const value = e.value;
    const isChecked = e.checked;

    const cardIndex = selectedCards.findIndex(
      (card: any) => card.id === value.id
    );

    if (isChecked && cardIndex === -1) {
      setSelectedCards([...selectedCards, value]);
    } else if (!isChecked && cardIndex !== -1) {
      const updatedSelectedCards = [...selectedCards];
      updatedSelectedCards.splice(cardIndex, 1);
      setSelectedCards(updatedSelectedCards);
    }
  };

  return (
    <>
      <div className="bg-gray-100 h-[100vh]">
        <Header
          array={selectedCards}
          isSelected={isSelected}
          cardList={cardList}
          setIsSelected={setIsSelected}
          setSelectedCards={setSelectedCards}
          type="card-list"
        />

        {user.role === "admin" && (
          <div className="flex items-center gap-10 pt-[120px] sm:pt-[150px] lg:pt-[120px] px-10">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl">Total Card</div>
              <div className="font-semibold text-2xl">{counts.totalCards}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl">Total Task</div>
              <div className="font-semibold text-2xl">{counts.totalTasks}</div>
            </div>
          </div>
        )}
        <div
          className={`bg-[#f2f6f8]  p-10 ${
            user.role !== "admin"
              ? `py-[120px] sm:py-[150px] lg:py-[120px]`
              : ``
          } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
        >
          {isLoading ? (
            <SkeletonC />
          ) : (
            cardList.map((card: any) => (
              <div key={card.id}>
                {isSelected && (
                  <div className={styles.check}>
                    <Checkbox
                      inputId={card.id}
                      name="card"
                      value={card}
                      onChange={onCategoryChange}
                      checked={selectedCards?.some(
                        (item: any) => item?.id === card.id
                      )}
                    />
                  </div>
                )}
                <Card
                  name={card.name}
                  image={card?.image_urls && card?.image_urls[0]}
                  jobTitle={card.job_title}
                  onClick={() => {
                    if (user.role !== "admin") {
                      navigate(`/cards-details/${card.id}`);
                    }
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
