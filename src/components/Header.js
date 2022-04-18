import React from 'react'



export default function Header() {
  function handleSubmit(e) {
    e.preventDefault();
    //Modo claro/oscuro
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        let iconColor = document.getElementById("color-icon-header")

        iconColor.classList.toggle('bi-moon-fill');

        let e = document.body;
        e.classList.toggle('light-mode')
      })
    };
  }
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home" className="logo-header"><img src="/logo192.png" alt="logo Lorena Cohene Báez" /></a></li>
          <button onClick={handleSubmit} type='button' className="theme-btn btn" id='theme-btn'>
            <i id='color-icon-header' className="bi bi-brightness-high"></i>
          </button>
          <li><a href="#home" className='btn'><i className="bi bi-house-door-fill"></i>Inicio</a></li>
          <li><a className='btn' href="#skills"><i className="bi bi-pc-display-horizontal"></i> Tecnologías</a></li>
          <li><a className='btn' href="#projects"><i className="bi bi-briefcase-fill"></i> Proyectos</a></li>
          <li><a className='btn' href="#contact"><i className="bi bi-envelope-fill"></i> Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}
