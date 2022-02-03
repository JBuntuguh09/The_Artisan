import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './HomeCarousel.scss'

const HomeCarousel = (props) => {
  
  return (
    <div >
      <Carousel fade>
        {props.caroArray.map((arr,idx) => {
          return (
            <Carousel.Item key={idx} className="text-start">
              <img             
                alt={arr.alt}
                className="d-block vh-md-100 w-100 myClass"
                src={arr.imageUrl}
              />
                <Carousel.Caption className="align-middle p-3 rounded">
                <h1 className="d-none d-lg-block d-sm-none">Hire the best Artisans for any job, right here</h1>
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
