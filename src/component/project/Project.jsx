import React from 'react'
import project from './project.css'
import img1 from "../../assets/carte.png"

const data = [
  {
    id: 1,
    image: img1,
    title: 'projet alloc memoire',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 2,
    image: img1,
    title: 'projet alloc memoire',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 3,
    image: img1,
    title: 'projet alloc memoire',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 4,
    image: img1,
    title: 'projet alloc memoire',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
]


const Project = () => {
    return (
        <section id="project">
            <h5>Mes différents projets</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {data.map(({id, image, title, github, demo}) => {
                  return (
                    <article key={id} className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio_item-cta">
                        <a href={github} className='btn' target="_blank">Github</a>
                        <a href={demo} className='btn btn-primary' target="_blank">Demo</a>
                    </div>
                    </article>
                  )
                })}
            </div>
        </section>
    )
}

export default Project