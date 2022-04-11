import React from 'react'

export default function VideoDemo() {
  return (
    <div id='video-leaf' className='video-demo'>
      <h4 id='leaf3'>Librería LEAF</h4>
      <video src="/assets/projects/demo-LEAF.mp4" controls muted></video>
      <div ><button type='button' id="close-video-leaf" className="btn-video">Cerrar <i className="bi bi-x"></i></button></div>
    </div>
  )
}
