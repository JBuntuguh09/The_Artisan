import React from "react";
import HomeCarousel from "../../Components/carousel/carousel.component";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../Components/Resources/Header/header.component";

const Home = () => {
  const caroArray = [
    {
      title: "Plumbers",
      imageUrl:
        "https://media.istockphoto.com/photos/black-male-plumber-at-work-picture-id1348934184?b=1&k=20&m=1348934184&s=170667a&w=0&h=Y6_76kemqf4aSEPwM5xEw9pxbyEM9QMTMVouRiJM72M=",
      caption: "We have the best plumbers here",
      alt: "first slide"
    },
    {
      title: "Capenters",
      imageUrl:
        "https://media.istockphoto.com/photos/plumber-at-work-in-a-bathroom-plumbing-repair-service-assemble-and-picture-id918319088?b=1&k=20&m=918319088&s=170667a&w=0&h=-YgoN2GgVmYrEMFLz_qsb8LZvIWmjJHaKrIjKrTiQ2U=",
      caption: "We have the best Capenters here",
      alt: "second slide"
    },
    {
      title: "Brick Layer/Mason",
      imageUrl:
        "https://media.istockphoto.com/photos/construction-workers-building-concrete-block-wall-picture-id175205008?b=1&k=20&m=175205008&s=170667a&w=0&h=YCFU_mz9ZNG1z2fW-HGYhH3utfPVYNB4BIlqe18fODA=",
      caption: "We have the best masons/brick layers here",
      alt: "third slide"
    },
  ];

  return (
    <div className="homepage">
      <Header />
      <HomeCarousel caroArray={caroArray} caption='true'/>
    </div>
  );
};

export default Home;
