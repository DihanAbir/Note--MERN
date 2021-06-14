import React, { useEffect, useState } from "react";
import Rectenglur from "../Assets/Rectangle 20.png";

import { Link } from "react-router-dom";
import "../Mycss/CatagoryCard.css";

function CategoryCard({ searchvalue, ascValue }) {
  const [card, setCard] = useState([
    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1527656855834-0235e41779fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      heading: "headin1",
      describtion:
        "of type and scrambled it to make a type specimen book. It has survived not only five c",
    },

    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1528968620-57e0257ff360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      heading: "heading",
      describtion:
        " with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ",
    },
    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzM4MTQ2OXx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=291.2&q=60",
      heading: "headin1",
      describtion:
        "d scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, re",
    },

    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1530303263041-b5ca33678f04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5vdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      heading: "heading",
      describtion:
        "or at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and g",
    },
    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1587463646075-888e8afef90e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG5vdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      heading: "headin1",
      describtion:
        "ry to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    },

    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG5vdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      heading: "heading",
      describtion:
        "a Loremfsdfsdf ipsum dour maiores quas, praesentium quasi laborum.",
    },
    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG5vdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      heading: "headin1",
      describtion:
        "ough the cites of the word in classical literature, discovered the undaiores quas, praesentium quasi laborum.",
    },

    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1521079299535-94854b0a7b27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fG5vdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      heading: "heading",
      describtion:
        "ough the cites of the word in classical literature, discovered the und a Loremfsdfsdf ipsum dour maiores quas, praesentium quasi laborum.",
    },
    {
      cardImg: Rectenglur,
      profileImg:
        "https://c.files.bbci.co.uk/1433C/production/_117684728_zeroconceptcar.jpg",
      heading: "headin1",
      describtion:
        " defined chunks as necessary, making this the first true Lorem ipsum dour maiores quas, praesentium quasi laborum.",
    },

    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1602138167531-d58c54a64da4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fG5vdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      heading: "heading",
      describtion:
        "wwwwa Loremfsdfsdf ipsum dour maiores quas, praesentium quasi laborum.",
    },
    {
      cardImg: Rectenglur,
      profileImg:
        "https://images.unsplash.com/photo-1606143986926-83f7897591df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fG5vdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      heading: "headin1",
      describtion:
        "wwterature from 45 BC, making it over 2000 ym quasi laborum.",
    },

    {
      cardImg: Rectenglur,
      profileImg:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg",
      heading: "heading",
      describtion:
        "mary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of cla dour maiores quas, praesentium quasi laborum.",
    },
  ]);

  console.log(`ascValue`, ascValue);

  const searchedValue = card.filter((val) => {
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
