import React from 'react'

export default function VideoDemo() {
  function handleChange(e){
    e.preventDefault();

    const btnClose = document.getElementById('close-video-leaf');
    if (btnClose) {
      btnClose.addEventListener('click', () => {
        let element = document.getElementById('video-leaf');
        element.style.display = "none"
      })
    }
  }
  return (
    <div id='video-leaf' className='video-demo'>
      <h4 id='leaf3'>Librería LEAF</h4>
      <video src="/assets/projects/demo-LEAF.mp4" controls muted></video>
      <div ><button type='button' onClick={handleChange} id="close-video-leaf" className="btn-video">Cerrar <i className="bi bi-x"></i></button></div>
    </div>
  )
}
