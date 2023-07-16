import React from 'react'

import './About.css'
import content from '../json/content';

const About = () => {
  return (
    <section id='about' className='about'>
        <div className="bg-image">
        <div className="content">
          <h1>About us</h1>
          <p>The official Anime club of Maulana Abul Kalam Azad University of Technology, West Bengal</p>
          <p>We are a club of anime and manga enthusiasts from the main campus of MAKAUT (in-house), trying to enjoy in a community together.</p>
          <p>Join us on Discord: <a href='https://discord.gg/F4GyEkFTxN'>https://discord.gg/F4GyEkFTxN</a></p>
        </div>
      </div>
    </section>
  )
}

export default About