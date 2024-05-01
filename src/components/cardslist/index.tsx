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
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const [selectedCards, setSelectedCards] = useState<any>([]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

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

  const onCategoryChange = (e: any) => {
    const value = e.value;
    const isChecked = e.checked;

    // Check if the card is already in selectedCards
    const cardIndex = selectedCards.findIndex(
      (card: any) => card.id === value.id
    );

    if (isChecked && cardIndex === -1) {
      // If checkbox is checked and card is not in selectedCards, add it
      setSelectedCards([...selectedCards, value]);
    } else if (!isChecked && cardIndex !== -1) {
      // If checkbox is unchecked and card is in selectedCards, remove it
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
          setIsSelected={setIsSelected}
          setSelectedCards={setSelectedCards}
          type="card-list"
        />
        <div className="bg-[#f2f6f8]  p-10 py-[120px] sm:py-[150px] lg:py-[120px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
