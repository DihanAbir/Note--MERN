import React from "react";
import AllCategory from "../component/AllCategory";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Menu from "../component/Menu";

function Landing() {
  return (
    <div>
      <Menu />
      <main style={{ height: "80vh" }}>
        <p>landing page</p>
        <Banner />
        <AllCategory />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
