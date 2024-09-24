import React from 'react'
import BtnContact from '../components/BtnContact'

import redes from '../data/socialLinks'

export default function Contact() {
  return (
    <div id='contact'>
      <h3>Contacto</h3>
      {/* <p className='about'>Contáctame y construyamos webs maravillosas.</p> */}
      <div className='contact-wrapper'>
        {redes.map((item, index) => {
          return (
        <BtnContact
        key={index}
        link= {item.link}
        name={item.name}
        icon={item.icon}
        />
          )
        })}
      </div>
    </div>
  )
}
