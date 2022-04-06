import React from 'react'

export default function Home() {
  return (
    <>
      <h1 id='home'>¡Hola!, soy <span className='accent'>Lorena Cohene Báez</span></h1>
      <h2>Desarrolladora web full stack</h2>
      <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorum minima corporis rem omnis voluptatibus iste quam veniam libero velit! Ducimus temporibus veniam placeat unde autem id eveniet fuga sunt.
    </p>
      <div >
        <nav >
        <ul className='contact-links'>
            <li ><a href="" className='social-link'><i className="bi bi-linkedin"></i></a></li>
            <li ><a href="" className='social-link'><i className="bi bi-envelope-open-fill"></i></a></li>
            <li ><a href="" className='social-link'><i className="bi bi-github"></i></a></li>
        </ul>
      </nav>
        <div className="btn-con">
          <a href="" className="main-btn">
            <span className="btn-text">Descargar CV</span>
            <span className="btn-icon"><i className="bi bi-cloud-arrow-down-fill"></i></span>
          </a>
        </div>
      </div>
    </>
  )
}
