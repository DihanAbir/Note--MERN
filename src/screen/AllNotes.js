import React from "react";
import { useState } from "react";
import CategoryCard from "../component/CategoryCard";
import FilterCustom from "../component/FilterCustom";
import HeroSection from "../component/HeroSection";
import "../Mycss/AllNotes.css";

function AllNotes() {
  const [searchvalue, setSearchValue] = useState("");
  const [ascValue, setAscValue] = useState("asc");

  return (
    <div>
      <HeroSection />
      <div className="top_container">
        <div className="inner_container">
          <FilterCustom
            setSearchValue={setSearchValue}
            setAscValue={setAscValue}
          />
          <CategoryCard searchvalue={searchvalue} ascValue={ascValue} />
        </div>
      </div>
    </div>
  );
}

export default AllNotes;
