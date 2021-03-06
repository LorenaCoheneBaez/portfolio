import React from 'react'

import CardProject from '../components/CardProject'
import VideoDemo from '../components/VideoDemo'
import VideoDemo2 from '../components/VideoDemo2'
import { projects, projectVideo } from '../data/projects'

export default function Projects
() {
  return (
      <div id='projects'>
        <h3>Proyectos</h3>
        <p className="about">Aquí se pueden ver algunos de mis proyectos.</p>
       <div className="container-project">
        {
          projects.map((item, index) => {
            return (
              <CardProject
              key= {index+item.id+1}
              title = {item.title}
              target= {item.target}
              rel= {item.rel}
              img= {item.img}
              linkDemo= {item.linkDemo}
              linkGithub= {item.linkGithub}
              tecno= {item.tecno}
              />
            )
          })
        }
        {
          projectVideo.map((item, index) => {
            return (
              <CardProject
                key={index + item.id + 1}
                title={item.title}
                target={item.target}
                rel={item.rel}
                img={item.img}
                linkDemo={`/${item.linkDemo}${item.id}`}
                linkGithub={item.linkGithub}
                tecno={item.tecno}
              />
            )
          })
        }
         </div> 

        <VideoDemo/>
        <VideoDemo2/>
        
      <a className="btn-contact repos" href="https://github.com/LorenaCoheneBaez?tab=repositories" target="_blank" rel="noreferrer nofollow noopener">Ver más</a>
    </div>
  )
}
