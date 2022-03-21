import React from "react";
import HomeCarousel from "../../Components/carousel/carousel.component";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderSub from "../../Components/Resources/HeaderSub/HeaderSub.Component";
import Header from "../../Components/Resources/Header/header.component";
import { caroArray } from "../../Components/Resources/data";

const Home = () => {
 
  return (
    <div className="homepage">
      <Header />
      <HeaderSub/>
     
      <HomeCarousel caroArray={caroArray} caption='true'/>
    </div>
  );
};

export default Home;
