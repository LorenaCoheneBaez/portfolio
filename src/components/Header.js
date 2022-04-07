import React from 'react'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <button type='button' className="theme-btn btn">
            <i className="bi bi-circle-half"></i>
          </button>
          <li><a href="#inicio" className='btn'><i className="bi bi-house-door-fill"></i>Inicio</a></li>
          <li><a className='btn' href="#skills"><i className="bi bi-pc-display-horizontal"></i> Tecnologías</a></li>
          <li><a className='btn' href="#projects"><i className="bi bi-briefcase-fill"></i> Proyectos</a></li>
          <li><a className='btn' href="#contact"><i className="bi bi-envelope-fill"></i> Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
