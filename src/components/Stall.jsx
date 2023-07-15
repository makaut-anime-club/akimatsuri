import React from "react";

import './Stall.css'
import content from '../json/content';

const Stall = () => {
  return (
    <section id="stall" className="stall">
      <div className="bg-image">
        <div className="content">
          <h1>{content.stall.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Stall;
