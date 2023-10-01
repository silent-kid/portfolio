import React from 'react'
import './intro.css'
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'; //

const intro = () => {
  return (
    <section id='intro'>
    <div className='introContent'>
        <span className='hello'>
            Full-Stack Web Developer 👋<br/>
        </span>
        <span className='introText'>Hello, I am <span className="introName">Mohammad Jawwad</span><br/>A passionate Full-Stack Developer based in Delhi, India.📍</span>
        <Link><button class="btn"><img src={btnImg} alt=""/>Hire Me</button></Link>
    </div>
    <img src={bg} alt="Profile" class="bg"/>
    </section>
  )
}

export default intro