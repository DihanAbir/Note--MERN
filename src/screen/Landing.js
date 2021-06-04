import React from "react";
import AllCategory from "../component/AllCategory";
import Banner from "../component/Banner";
import SubscribeNow from "../component/SubscribeNow";

function Landing() {
  return (
    <div>
      <main className="main_class">
        <Banner />
        <AllCategory />
        <SubscribeNow/>
      </main>
    </div>
  );
}

export default Landing;
