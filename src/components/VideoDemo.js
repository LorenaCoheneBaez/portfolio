import React from 'react'

export default function VideoDemo() {
  return (
    <div id='video-leaf' className='video-demo'>
      <h4 id='leaf3'>Leaf librería</h4>
       <video src="" controls poster="leaf-poster.jpeg" muted></video>
      <div ><button id="close-video-leaf" className="btn-video">Cerrar <i className="bi bi-x"></i></button></div>
    </div>
  )
}
