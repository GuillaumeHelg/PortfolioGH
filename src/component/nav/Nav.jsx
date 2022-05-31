import React from 'react'
import './nav.css'
import {FiHome} from "react-icons/fi"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {BsFillBriefcaseFill} from "react-icons/bs"
import {BiRocket} from "react-icons/bi"
import {MdPermContactCalendar} from "react-icons/md"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
        <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><BsFillBriefcaseFill/></a>
        <a href="#motivation" onClick={() => setActiveNav('#motivation')} className={activeNav === '#motivation' ? 'active' : ''}><BiRocket/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdPermContactCalendar/></a>
    </nav>
  )
}

export default Nav