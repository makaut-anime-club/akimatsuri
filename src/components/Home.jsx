import { useRef, useState } from "react";

import './Home.css'
import Carousel from "./UI/Carousel";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const windowWidth = useRef(window.innerWidth)
  const [width] = useState(windowWidth.current)
  return (
    <main>

      <section id="home" className="home">
        <div className="bg-image center">
          <div className="banner" style={{ zIndex: '0' }}>
            <img src={width > 600 ? "https://i.ibb.co/ZxkyyLw/desktop-view-wallpaper.png": "https://i.ibb.co/JC8mYdR/mobile-view-wallpaper.png"} alt="banner image - akimatsuri" />
          </div>
          <div className="content">
            {/* <div className="info">
              <h1>{content.home.title}</h1>
              <p>Welcoming all the anime and manga enthusiasts to this amazing festival</p>
            </div> */}
            <div className="center">
              {
                width < 600 &&
                <Link to={'https://forms.gle/yQYdTVA8yN64strm8'}>
              <button>Register here</button>
            </Link>
              }
            </div>

            {width > 600 && <Link to={'https://forms.gle/yQYdTVA8yN64strm8'}>
              <button>Register here</button>
            </Link>}
          </div>
        </div>
      </section>
      <section id="info" className="" style={{ height: '100vh'}}>
        <div className="main-info">
          <h1 style={{color: 'white', textShadow: '2px 2px 6px purple' }}>Welcoming all the anime and manga enthusiasts to this amazing festival</h1>
          <div className="tagLine">  <p style={{color: 'whitesmoke', fontSize: '50px', fontFamily: 'Handjet', fontWeight: '300'}}><span>UNLEASH</span> YOUR INNER OTAKU !</p> </div>
        </div>
        <div className="car-ousel" >
          <Carousel />
        </div>
      </section>
      <section id="activities" style={{background:'linear-gradient(white, #aa67aa)'}}>
            <div className="anime">
              <img src="/anime.png" alt="naruto img" />
              <p className="">Anime</p>
            </div>
            <div className="games">
              <img src="/game.png" alt="console img" />
              <p>Games</p>
            </div>
            <div className="enjoy">
            <img src="/enjoy.png" alt="party img" />
            <p>Enjoy</p>
            </div>
      </section>
      <section id="timeline" style={{height: '100vh', background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)', textAlign: 'center'}}>
        <h3 style={{color: 'white', textAlign: 'center', padding: '2rem'}}>Event Timings</h3>
        <div className="image-event-timeline" style={{padding: '2rem 0', textAlign: 'center'}}>
          <img src="/eventTimings.png" alt="" />
        </div>
        <a href="/eventTimings.png" download><button>Download Timings</button></a>
      </section>
    </main>
  );
};

export default Home;
