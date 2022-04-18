import React from 'react'

export default function VideoDemo2() {
    function handleChange(e) {
        e.preventDefault();
        const btnCloseGarden = document.getElementById('close-video');
      
        if (btnCloseGarden) {
            btnCloseGarden.addEventListener('click', () => {
                let element = document.getElementById('video-garden');
                element.style.display = "none"
            })
        }
    }
    return (
        <div id='video-garden' className='video-demo'>
            <h4 id='garden4'>Garden designs</h4>
            <video src="/assets/projects/demo-garden.mp4" controls muted></video>
            <div><button onClick={handleChange}type='button'className="btn-video"id="close-video">Cerrar <i className="bi bi-x"></i></button></div>
        </div>
    )
}
