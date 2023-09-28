import React from 'react'
import './navbar.css';
import {Link} from 'react-scroll';
import contactImg from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
        <p className='logo'>Jawwad</p>
        <div class="desktopMenu">
            <Link class="desktopMenuListItem">Home</Link>
            <Link class="desktopMenuListItem">About</Link>
            <Link class="desktopMenuListItem">Portfolio</Link>
            <Link class="desktopMenuListItem">Clients</Link>
        </div>
        <button class="desktopMenuBtn">
            <img src={contactImg} alt="contact" className='desktopMenuImg'/>Contact me
        </button>
    </nav>

  )
}

export default Navbar