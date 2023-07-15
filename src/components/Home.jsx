import React from "react";

import './Home.css'
import content from '../json/content';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="bg-image">
        <div className="content">
          <h1>{content.home.title}</h1>
          <p>{content.home.p1}</p>
          <p>{content.home.p2}</p>
          <p>{content.home.p3}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
