import React from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = (props) => {
  
  return (
    <div className="mh-75">
      <Carousel>
        {props.caroArray.map((arr,idx) => {
          return (
            <Carousel.Item key={idx}>
              <img
                alt="hommy"
                className="d-block vh-100 w-100 "
                src={arr.imageUrl}
              />
                <Carousel.Caption style={{position: "absolute", top: "-500px!mportant"}} className="align-middle">
                  <h3>{arr.title}</h3>
                  <p>{arr.caption}</p>
                </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeCarousel;
