import React from "react";

import './Home.css'
import content from '../json/content';
import Carousel from "./UI/Carousel";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="bg-image">
        <div className="content">
          <div className="info">
            <h1>{content.home.title}</h1>
            <p>Welcoming all the anime and manga enthusiasts to this amazing festival</p>
          </div>
          <div className="car-ousel">
            <Carousel />

            </div>
          </div>
        </div>
    </section>
  );
};

export default Home;
