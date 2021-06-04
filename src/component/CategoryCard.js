import React, { useState } from "react";
import Rectenglur from "../Assets/Rectangle 20.png";
import "../screen/OtherComponent.scss";

function CategoryCard() {
  const [card] = useState([
    {
      cardImg: Rectenglur,
      profileImg: Rectenglur,
      heading: "headin1",
      describtion: "Lorem ipsum dour maiores quas, praesentium quasi laborum.",
    },

    {
      cardImg: Rectenglur,
      profileImg: Rectenglur,
      heading: "heading",
      describtion: "Lorem ipsum dour maiores quas, praesentium quasi laborum.",
    },
    {
      cardImg: Rectenglur,
      profileImg: Rectenglur,
      heading: "heading",
      describtion: "Lorem ipsum dour maiores quas, praesentium quasi laborum.",
    },
  ]);
  return (
    <div className="all_cardList">
      {card.map((card) => (
        <div className="catagory_card">
          <div className="card_image">
            <img src={card.profileImg} alt="" />
          </div>
          <div className="card_body">
            <img src={card.cardImg} alt="" />
            <div className="inside_body">
              <h1>{card.heading}</h1>
              <p>{card.describtion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
