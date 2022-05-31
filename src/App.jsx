import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Project from './component/project/Project'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Motivation from './component/motivation/Motivation'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Project />
        <Motivation />
        <Contact />
        <Footer />
    </>
  )
}

export default App