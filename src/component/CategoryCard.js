import React, { useState } from "react";
import Rectenglur from "../Assets/Rectangle 20.png";

import { Link } from "react-router-dom";
import '../Mycss/CatagoryCard.css'

function CategoryCard() {
  const [card, setCard] = useState([
    {
      cardImg: Rectenglur,
      profileImg: "https://c.files.bbci.co.uk/1433C/production/_117684728_zeroconceptcar.jpg",
      heading: "headin1",
      describtion: "Lorem ipsum dour maiores quas, praesentium quasi laborum.",
    },

    {
      cardImg: Rectenglur,
      profileImg: "https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg",
      heading: "heading",
      describtion: "Lorem ipsum dour maiores quas, praesentium quasi laborum.",
    },
    {
      cardImg: Rectenglur,
      profileImg: "https://cdn.motor1.com/images/mgl/oRORb/s4/jordan-clarkson-beige-corvette-c8.jpg",
      heading: "heading",
      describtion: "Lorem ipsum dour maiores quas, praesentium quasi laborum.",
    },
  ]);
  return (
    <div className="all_cardList">
      {card.map((card) => (
        <Link style={{textDecoration:'none'}} to="/note_description">
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
        </Link>
      ))}
    </div>
  );
}

export default CategoryCard;
