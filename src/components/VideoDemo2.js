import React from 'react'

export default function VideoDemo2() {
    return (
        <div id='video-garden' className='video-demo'>
            <h4 id='garden4'>Garden designs</h4>
            <video src="" controls poster="garden-poster.jpeg" muted></video>
            <div><button className="btn-video"id="close-video">Cerrar <i className="bi bi-x"></i></button></div>
        </div>
    )
}
