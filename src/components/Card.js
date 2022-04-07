import React from 'react'

const Card = ({name, logo}) => {
  return (
    <div className='card'>
        <img className='card-img' src={`/assets/tech-icon/${logo}`} alt={name} />
        <div className="card-title">
          <h6 className='card-title'>{name}</h6>
        </div>
    </div>
  )
}

export default Card