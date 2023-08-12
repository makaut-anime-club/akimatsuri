import React, { useRef, useState } from "react";

import './Home.css'
import content from '../json/content';
import Carousel from "./UI/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const windowWidth = useRef(window.innerWidth)
  const [width, setWidth] = useState(windowWidth.current)
  console.log(windowWidth.current)
  return (
    <main>

      <section id="home" className="home">
        <div className="bg-image center">
          <div className="banner" style={{ zIndex: '1000000' }}>
            <img src={width > 600 ? "https://cdn.discordapp.com/attachments/1139851071930519562/1139871205952847872/Akimatsuri_4.png": "https://cdn.discordapp.com/attachments/1139851071930519562/1139853020541227028/Final_4.png"} alt="banner image - akimatsuri" />
          </div>
          <div className="content">
            {/* <div className="info">
              <h1>{content.home.title}</h1>
              <p>Welcoming all the anime and manga enthusiasts to this amazing festival</p>
            </div> */}
            <div className="center">
              {
                width < 600 &&
                <Link to={'/events'}>
              <button>Join any event</button>
            </Link>
              }
            </div>

            {width > 600 && <Link to={'/events'}>
              <button>Join any event</button>
            </Link>}
          </div>
        </div>
      </section>
      <section id="info" className="" style={{ height: '100vh', backgroundColor: '#ce9ede' }}>
        <div className="main-info">
          <h1>Welcoming all the anime and manga enthusiasts to this amazing festival</h1>
          <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ullam magni, explicabo praesentium aliquid sit, velit nemo sed culpa ex maiores tenetur officia blanditiis alias quae commodi, dolore incidunt temporibus.
          </div>
        </div>
        <div className="car-ousel" >
          <Carousel />
        </div>
      </section>
      <section id="activities"  style={{ backgroundColor: '#ce9ede' }}>
            <div className="anime">
              <img src="icons8-naruto-48.png" alt="naruto img" />
              <p className="">Anime</p>
            </div>
            <div className="games">
              <img src="icons8-games-48.png" alt="console img" />
              <p>Games</p>
            </div>
            <div className="enjoy">
            <img src="icons8-enjoy-64.png" alt="party img" />
            <p>Enjoy</p>
            </div>
      </section>
    </main>
  );
};

export default Home;
