import React from 'react'
import './Background.css'
import video1 from '../Assets/video1.mp4'
import car1 from '../Assets/car1.jpg'
import car2 from '../Assets/car2.jpg'
import car3 from '../Assets/car3.png'
import car4 from '../Assets/car4.png'

function Background({playStatus, heroCount}) {
  
    if(playStatus){
        return (
            <video className='background bg fade-in' autoPlay loop muted preload='auto'>
                <source src={video1} type='video/mp4' />
            </video>
        )
    }
    else if(heroCount===0){
        return <img src={car1} className='background fade-in' alt='Car1' />
    }
    else if(heroCount===1){
        return <img src={car2} className='background fade-in' alt='Car2' />
    }
    else if(heroCount===2){
        return <img src={car3} className='background fade-in' alt='Car3' />
    }
    else if(heroCount===3){
        return <img src={car4} className='background fade-in' alt='Car4' />
    }
}

export default Background