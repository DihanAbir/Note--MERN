import React from "react";
import CategoryCard from "./CategoryCard";

function AllCategory() {
  return (
    <div className="catagory_list">
      <h1 className="catagory_header">all Category</h1>

      <div className="course_list">
        <CategoryCard />
      </div>
    </div>
  );
}

export default AllCategory;
