import React from "react";
import AllCategory from "../component/AllCategory";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Menu from "../component/Menu";
import SubscribeNow from "../component/SubscribeNow";

function Landing() {
  return (
    <div>
      <Menu />
      <main className="main_class">
      
        <Banner />
        <AllCategory />
        <SubscribeNow/>
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
