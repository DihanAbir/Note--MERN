import React from "react";
import CategoryCard from "./CategoryCard";
import "../Mycss/AllCategory.css";
import Category from "./Category";

function AllCategory() {
  return (
    <div className="catagory_list">
      <h1 className="catagory_header">All Category</h1>
      <div className="course_list">
        <Category />
      </div>
    </div>
  );
}

export default AllCategory;
