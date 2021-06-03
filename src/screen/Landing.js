import React from "react";
import AllCategory from "../component/AllCategory";
import Banner from "../component/Banner";

function Landing() {
  return (
    <div>
      <main className="main_class">
        <Banner />
        <AllCategory />
      </main>
    </div>
  );
}

export default Landing;
