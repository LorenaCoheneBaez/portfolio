import React from 'react'

export default function CardProject(title, img, linkDemo,linkGithub) {
  return (
    <div className='project-item'>
      <div className="project-img">
        <img src={img} alt={title} />
      </div>
      <div className="project-hover">
        <h4></h4>
        <a href={linkGithub} className="project-icon" target="_blank" rel="noreferrer nofollow noopener"><i className='bi bi-github'></i> Código
        </a>
        <a href={linkDemo} className="project-icon" target="_blank" rel="noreferrer nofollow noopener">
          <i className="bi bi-eye-fill"></i> Demo
        </a>
      </div>
    </div>
  )
}
