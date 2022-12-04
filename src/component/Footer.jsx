import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im';
import {GrInstagram} from 'react-icons/gr';
import {TfiTwitter} from 'react-icons/tfi';

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>DineMe</a>

    <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
        <a href="https://www.facebook.com/manash.anand.1/" target="_blank"><ImFacebook2/></a>
        <a href="https://www.instagram.com/manash.anand.1/" target="_blank"><GrInstagram/></a>
        <a href="https://twitter.com/manashanand2" target="blank"><TfiTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; DineMe Restaurants . All right reserved.</small>
    </div>
   </footer>
  )
}

export default Footer
