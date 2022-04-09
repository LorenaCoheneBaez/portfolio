import React from 'react'

export default function CardProject({title, target, rel, img, linkDemo,linkGithub, tecno}) {
  return (
    <div className='project-item'>
      <div className='project-img-container'>
        <img className="project-img" src={`/assets/projects/${img}`} alt={title} />
      </div>
      <div className="project-hover">
        <h5 className='project-item-title'>{title}</h5>
      <div className="project-icon-container">
        <a href={linkGithub} className="project-icon" target={target} rel={rel}><i className='bi bi-github project-i'></i> Código
        </a>
        <a href={linkDemo} className="project-icon" target={target} rel={rel} id={linkDemo}>
          <i className="bi bi-eye-fill"></i> Demo
        </a>
        </div>
        <p className='project-tecno'>{tecno}</p>
      </div>
    </div>
  )
}
