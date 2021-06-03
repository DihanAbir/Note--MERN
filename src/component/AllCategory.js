import React from "react";
import CategoryCard from "./CategoryCard";

function AllCategory() {
  return (
    <div className="catagory_list">
      <h1 className="catagory_header">Top Featured Courses</h1>

      <div className="course_list">
        <CategoryCard/>
      </div>
    </div>
  );
}

export default AllCategory;
