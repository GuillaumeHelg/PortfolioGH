import React from 'react'
import header from './header.css'
import CTA from './CTA'
import ME from '../../assets/istockphoto-1249847791-612x612.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Guillaume HELG</h1>
            <h5 className='text-light'>Student in Computer Science</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header