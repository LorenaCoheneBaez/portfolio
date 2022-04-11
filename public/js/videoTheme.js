window.onload = function () {
    //Modo claro/oscuro
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let iconColor = document.getElementById("color-icon-header")

        iconColor.classList.toggle('bi-moon-fill');

        let e = document.body;
        e.classList.toggle('light-mode')
    })
    
    //Controles video
    const demo = document.getElementById('/#leaf3');

    const btnClose = document.getElementById('close-video-leaf')

    demo.addEventListener('click', ()=>{

        let element = document.getElementById('video-leaf');
        element.style.display = "block"
    })

    btnClose.addEventListener('click', () =>{
        let element = document.getElementById('video-leaf');
        element.style.display = "none"
    })

    const demoGarden = document.getElementById('/#garden4');

    const btnCloseGarden = document.getElementById('close-video')

    demoGarden.addEventListener('click', () => {

        let element = document.getElementById('video-garden');
        element.style.display = "block"

    })

    btnCloseGarden.addEventListener('click', () => {
        let element = document.getElementById('video-garden');
        element.style.display = "none"
    })
}