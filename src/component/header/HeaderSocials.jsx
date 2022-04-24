import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {HiMail} from "react-icons/hi"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://twitter.com/LorddragonLord" target="_blank"><FaTwitter/></a>
        <a href="https://ms-my.facebook.com/Lorddragon12" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/GuillaumeHelg" target="_blank"><BsGithub/></a>
        <a href="https://www.instagram.com/guillaume.helg/" target="_blank"><BsInstagram/></a>
        <a href="https://fr.linkedin.com/in/guillaume-helg-b2baa4214" target="_blank"><BsLinkedin/></a>
        <a href="mailto:guillaume.helg@protonmail.com" target="_blank"><HiMail/></a>
    </div>
  )
}

export default HeaderSocials