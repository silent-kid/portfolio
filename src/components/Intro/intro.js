import React from 'react'
import './intro.css'
import bg from '../../assets/image.png';

const intro = () => {
  return (
    <section id='intro'>
    <div className='introContent'>
        <span className='hello'>
            Full-Stack Web Developer 👋<br/>
        </span>
        <span className='introText'>Hello, I am <span className="introName">Mohammad Jawwad</span><br/>A passionate Full-Stack Developer based in Delhi, India.📍</span>
    </div>
    <img src={bg} alt="Profile" class="bg"/>
    </section>
  )
}

export default intro