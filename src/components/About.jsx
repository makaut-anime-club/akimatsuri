import React from 'react'

import './About.css'

const aboutImages = [
  { src: "https://i.ibb.co/87c71qG/club-img-pic-2.jpg", alt: "club image initial start" },
  { src: "https://i.ibb.co/bKSRwrh/club-img-pic-1.jpg", alt: "club image featuring Kuru Kuru" },
  { src: "https://i.ibb.co/Z18WyVM/club-img-pic-3.jpg", alt: "club image featuring Kuru Kuru once more but properly" },
  { src: "https://i.ibb.co/M9t8QfM/club-img-pic-4.jpg", alt: "club image while decorating club room" }
]


const About = () => {
  return (
    <section id='about' className='about'>
      <div className="bg-image">
        <div className="content">
          <h1>About us</h1>
          <p>The official Anime club of Maulana Abul Kalam Azad University of Technology, West Bengal</p>
          <p>We are a club of anime and manga enthusiasts from the main campus of MAKAUT (in-house), trying to enjoy a common hobby in a community together.</p>
        </div>
        <div>
        </div>
      </div>
      <div className="club-images">
        <div className="club-gallery-heading">
        <h1>Photo Gallery</h1>
        </div>
          <img src={aboutImages[0].src} alt={aboutImages[0].alt} />
          <img src={aboutImages[1].src} alt={aboutImages[1].alt} />
          <img src={aboutImages[2].src} alt={aboutImages[2].alt} />
          <img src={aboutImages[3].src} alt={aboutImages[3].alt} />
      </div>
    </section>
  )
}

export default About