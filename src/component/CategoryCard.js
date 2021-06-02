import React, { useState } from "react";
import Rectenglur from "../Assets/Rectangle 20.png";
import style from "../screen/OtherComponent.module.css";

function CategoryCard() {
  const [card, setCard] = useState([
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
    <div className={style.all_cardList}>
      {card.map((card) => (
        <div className={style.catagory_card}>
          <div className={style.card_image}>
            <img src={card.cardImg} alt="" />
          </div>
          <div className={style.card_body}>
            <img src={card.profileImg} alt="" />
            <div className={style.inside_body}>
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
