import React from "react";
import CategoryCard from "../component/CategoryCard";
import FilterCustom from "../component/FilterCustom";
import HeroSection from "../component/HeroSection";
import '../Mycss/AllNotes.css'

function AllNotes() {
  return (
    <>
      <HeroSection />
      <div className="top_container">
        <div className="inner_container">
          <FilterCustom />
          <CategoryCard />
        </div>
      </div>
    </>
  );
}

export default AllNotes;
