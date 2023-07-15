import React from 'react'

import './About.css'
import content from '../json/content';

const About = () => {
  return (
    <section id='about' className='about'>
        <div className="bg-image">
        <div className="content">
          <h1>{content.about.title}</h1>
          <p>{content.about.p1}</p>
          <p>{content.about.p2}</p>
          <p>{content.about.p3}</p>
        </div>
      </div>
    </section>
  )
}

export default About