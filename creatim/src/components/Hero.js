import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slika1 from "../images/bg1.jpg";
import slika2 from "../images/bg2.jpg";
import slika3 from "../images/bg3.jpg";

import "../style/Hero.css";

const Hero = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
        <div>
          <img src={slika1} />
        </div>
        <div>
          <img src={slika2} />
        </div>
        <div>
          <img src={slika3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
