import React from 'react'
import './Hero.css'
import arrow from '../Assets/arrow.png'
import play from '../Assets/play.png'
import pause from '../Assets/pause.png'
function Hero({heroData, setPlayStatus, heroCount, setHeroCount, playStatus}) {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text}</p>
            <p>{heroData.data}</p>
        </div>
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow} className='btn' alt="Arrow Btn" />
        </div>
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>{setHeroCount(0)}} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>{setHeroCount(1)}} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>{setHeroCount(2)}} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>{setHeroCount(3)}} className={heroCount===3?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img className='btn' onClick={()=>{setPlayStatus(!playStatus)}} src={playStatus?pause:play} alt="Play btn" />
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero