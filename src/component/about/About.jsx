import React from 'react'
import './about.css'
import Me from '../../assets/istockphoto-1249847791-612x612.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"

const About = () => {
    return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={Me} alt="about me" />
                </div>
            </div>
        <div className="about_content">
            <div className="about_cards">
                <article className="about_card">
                    <FaAward className='about_icon'/>
                    <h5>Experience</h5>
                    <small>Etudiant</small>
                </article>
                <article className="about_card">
                    <FiUsers className='about_icon'/>
                    <h5>Experience</h5>
                    <small>Etudiant</small>
                </article> 
                <article className="about_card">
                    <FaAward className='about_icon'/>
                    <h5>Experience</h5>
                    <small>Etudiant</small>
                </article>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quos sint illum nemo, 
              labore alias voluptates nulla officia, in earum impedit minus atque deserunt error neque,
              mollitia accusamus id dolorem!
            </p>
            <a href="#contact" className='btn btn-primary'>Me contacter</a>
          </div>
       </div>
    </section>
  )
}

export default About