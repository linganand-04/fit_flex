import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      <video loop muted autoPlay> 
        {/* <source src="https://videos.pexels.com/video-files/6388436/6388436-sd_640_360_25fps.mp4" type="video/mp4" /> */}
        <source src="../src/assets/bg_vid.mp4" type="video/mp4" />
        </video>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>Boyz Fitness</h5>
        </span>
        <h2>Unleash the Inner <b>Fitness</b> Wizard: Morph Your Bod, <b>Upgrade</b> Your Life Quest!</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero