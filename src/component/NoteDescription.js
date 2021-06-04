import React, { useState ,useEffect} from "react";

import CatagoryItem from "../Assets/catagoriitem.png";
import ImageMan from "../Assets/img.png";
import Descriptionpic from "../Assets/descriptionpic.png";
import '../Mycss/NoteDescribtion.css'

function NoteDescription() {
  const [details, setDetails] = useState([
    {
      catagoryImg: CatagoryItem,
      itemHeading: "Describtion",
      itemDescribtion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitIure",

      Enrolled: "something",
      duration: "something",
      lecture: "something",
      catagories: "something",
      level: "something",
    },
  ]);

  const [scrolled, setScrolled] = useState(false);


  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 380) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["other_section"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }



  return (
    <div className="container1">
      <div className="inner_catagory">
        <div className="header_catagory">
          <p>Course detail</p>
          <h1>User Research for User Experience Design</h1>
        </div>
        {details.map((detail) => (
          <div className="Two_item">
            <div className="catagory_image">
              <img src={detail.catagoryImg} alt="" />
              <h1>{detail.itemHeading}</h1>
              <p className="describtion">{detail.itemDescribtion}</p>
            </div>

            <div className={navbarClasses.join(" ")}>
              <div className="other_section1">
                <b>enroll:</b>
                <span>{detail.Enrolled}</span>
                <hr />
              </div>
              <div className="other_section1">
                <b>duration:</b>
                <span>{detail.duration}</span>
                <hr />
              </div>
              <div className="other_section1">
                <b>lecture:</b>
                <span>{detail.lecture}</span>
                <hr />
              </div>
              <div className="other_section1">
                <b>catagory:</b>
                <span>{detail.catagories}</span>
              </div>
              <div className="other_section1">
                <b>level:</b>
                <span>{detail.level}</span>
              </div>

              <div className="othersectionpic">
                <img src={Descriptionpic} alt="" />
                <p>Contact a customer support at</p>
                <strong> vctung@outlook.com</strong>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteDescription;

{
  /* <div className="profie">
<div className="profile_picand_des">
   <img src={ImageMan} alt="" />
   <h1>sakib</h1>
   <p>skoada</p>
   <p>sasa</p>
   <p>daa</p>
</div>
</div> */
}
