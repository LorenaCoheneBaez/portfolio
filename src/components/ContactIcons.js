import React from 'react'

const ContactIcons = ({link, icon}) => {
  return (
      <li ><a href={link} className='social-link' target="_blank" rel="noreferrer nofollow noopener"><i className= {icon} ></i></a></li>
  )
}

export default ContactIcons;