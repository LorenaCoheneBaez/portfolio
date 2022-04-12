import React from 'react'
import Card from '../components/Card'

import skills from '../data/skills'

export default function Skills() {
  return (
      <div id='skills'>
        <h3>Tecnologías</h3>
      <p className='about'>Algunas de las tecnologías que utilizo en mis proyectos:</p>
    <div className='grid-skills'>
      {
        skills.map((item, index)=>{
          return (
            <article key={index + item.id}>
            <Card
            name= {item.name}
            logo= {item.logo}
            />
        </article>
          )
        })
      }
    </div>
    </div>
  )
}
