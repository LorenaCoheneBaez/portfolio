import React from 'react'

export default function BtnContact({ link, name, icon }) {
  return (
    <div className="btn-contact ">
      <a href={link} target="_blank" rel="noreferrer nofollow noopener" className="main-btn btn-contact-a">
        <span className="btn-text">{name}</span>
        <span className="btn-icon"><i className={icon} ></i></span>
      </a>
    </div>)
}
