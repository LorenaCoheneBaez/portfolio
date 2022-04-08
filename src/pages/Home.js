import React from 'react'
import ContactIcons from '../components/ContactIcons'

import redes from '../data/socialLinks'

export default function Home() {
  return (
    <div id='home'>
      <div className='text-home'>
        <h1 className='accent'>Lorena Cohene Báez</h1>
        <h2>Desarrolladora web full stack</h2>
        <p className="about">¡Hola! Me encanta crear páginas webs funcionales, buscar nuevos desafíos y conocer cómo funciona la tecnología.
        </p>
      </div>
      <div >
        <nav >
          <ul className='contact-links'>
            {redes.map((item, index) => {
              return (
                <ContactIcons
                  key={index + item.id}
                  link={item.link}
                  icon={item.icon}
                />
              )
            })}
          </ul>
        </nav>
        <div className="btn-contact">
          <a href="/assets/cv-Lorena_Cohene_Baez.pdf" className="main-btn" download="CV-Lorena-Cohene-Baez">
            <span className="btn-text">Descargar CV</span>
            <span className="btn-icon"><i className="bi bi-cloud-arrow-down-fill"></i></span>
          </a>
        </div>
      </div>
      <div className='wrapper-img-perfil'>
        <img className='img-perfil' src="/assets/foto-linkedin.png" alt="Foto de perfil" />
      </div>
    </div>
  )
}
