import React from 'react'

export default function CardProject({title, target, rel, img, linkDemo,linkGithub, tecno}) {
  function handleChange(e) {
    const demo = document.getElementById('/#leaf3');

    if (demo) {
      demo.addEventListener('click', (e) => {

        let element = document.getElementById('video-leaf');
        element.style.display = "block"
      })
    }
    const demoGarden = document.getElementById('/#garden4');
    if (demoGarden) {
      demoGarden.addEventListener('click', () => {

        let element = document.getElementById('video-garden');
        element.style.display = "block"

      })
    }
  }
  return (
    <div className='project-item'>
      <div className='project-img-container'>
        <img className="project-img" src={`/assets/projects/${img}`} alt={title} />
      </div>
      <div className="project-hover">
        <h5 className='project-item-title'>{title}</h5>
      <div className="project-icon-container">
          <a href={linkGithub} className="project-icon" target="_blank" rel="noreferrer nofollow noopener"><i className='bi bi-github project-i'></i> Código
        </a>
          <a href={linkDemo} className="project-icon" target={target} rel={rel} id={linkDemo} onClick={handleChange}>
          <i className="bi bi-eye-fill"></i> Demo
        </a>
        </div>
        <p className='project-tecno'>{tecno}</p>
      </div>
    </div>
  )
}
