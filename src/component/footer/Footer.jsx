import React from 'react'
import footer from './footer.css'
import {BsLinkedin} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {HiMail} from "react-icons/hi"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>OhLordGOAT</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#motivation">Motivation</a></li>
        <li><a href="#contact">Contact</a></li>     
      </ul>


      <ul className='footer_socials'>
          <li><a href="https://twitter.com/LorddragonLord" target="_blank"><FaTwitter/></a></li>
          <li><a href="https://ms-my.facebook.com/Lorddragon12" target="_blank"><BsFacebook/></a></li>
          <li><a href="https://github.com/GuillaumeHelg" target="_blank"><BsGithub/></a></li>
          <li><a href="https://www.instagram.com/guillaume.helg/" target="_blank"><BsInstagram/></a></li>
          <li><a href="https://fr.linkedin.com/in/guillaume-helg-b2baa4214" target="_blank"><BsLinkedin/></a></li>
          <li><a href="mailto:guillaume.helg@protonmail.com" target="_blank"><HiMail/></a></li>
      </ul>

      <div className="footer_copyright">
        <small></small>
      </div>
    </footer>

    
  )
}

export default Footer