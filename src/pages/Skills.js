import React from 'react'
import Card from '../components/Card'

import skills from '../data/skills'

export default function Skills() {
  return (
      <div id='skills'>
        <h3>Tecnologías</h3>
    {
      skills.map((item, index)=>{
        return (
          <Card
          key={index+item.id}
          name= {item.name}
          logo= {item.logo}
          />
        )
      })
    }
    </div>
  )
}
