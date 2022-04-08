import React from 'react'
import Card from '../components/Card'

import skills from '../data/skills'

export default function Skills() {
  return (
      <div id='skills'>
        <h3>Tecnologías</h3>
      <p className='about'>Algunas de las tecnologías que utilizo en mis proyectos:</p>
    {
      skills.map((item, index)=>{
        return (
          <article>
          <Card
          key={index+item.id}
          name= {item.name}
          logo= {item.logo}
          />
      </article>
        )
      })
    }
    </div>
  )
}
