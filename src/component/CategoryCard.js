import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import noteData from "../Data/Notes";

import Rectenglur from "../Assets/Rectangle 20.png";
import "../Mycss/CatagoryCard.css";

function CategoryCard({ searchvalue, ascValue }) {
  const [card, setCard] = useState(noteData);
  const { catName } = useParams();

  const filteredCard = card.filter(
    (categoryCard) => categoryCard.category === catName
  );

  console.log(`ascValue`, ascValue);

  const searchedValue = filteredCard.filter((val) => {
    if (searchvalue === "") {
      return val;
    } else if (
      val.describtion.toLowerCase().includes(searchvalue.toLowerCase())
    ) {
      return val;
    } else if (val.heading.toLowerCase().includes(searchvalue.toLowerCase())) {
      return val;
    }
  });

  const sortedSearch = searchedValue.sort((a, b) => {
    const isReversed = ascValue === "asc" ? 1 : -1;
    return isReversed * a.describtion.localeCompare(b.describtion);
  });

  useEffect(() => {}, [ascValue]);

  return (
    <div className="all_cardList">
      {sortedSearch.map((card) => (
        <Link style={{ textDecoration: "none" }} to="/note_description">
          <div className="catagory_card">
            <div className="card_image">
              <span className="px-3  py-1 customeBadge badge badge-pill badge-danger">
                {card.category}
              </span>
              <img
                style={{ height: "35vh", objectFit: "cover" }}
                src={card.profileImg}
                alt=""
              />
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
