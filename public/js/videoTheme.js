window.addEventListener("load", function () {
    //Modo claro/oscuro
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn){
        themeBtn.addEventListener('click', () => {
            let iconColor = document.getElementById("color-icon-header")

            iconColor.classList.toggle('bi-moon-fill');

            let e = document.body;
            e.classList.toggle('light-mode')
        }, false)
    }
    
    
    //Controles video
    const demo = document.getElementById('/#leaf3');

    const btnClose = document.getElementById('close-video-leaf')
    if(demo){
        demo.addEventListener('click', (e) => {

            let element = document.getElementById('video-leaf');
            element.style.display = "block"
        }, false)        
    }

    if(btnClose){
        btnClose.addEventListener('click', () => {
            let element = document.getElementById('video-leaf');
            element.style.display = "none"
        }, false)
    }
    

    const demoGarden = document.getElementById('/#garden4');

    const btnCloseGarden = document.getElementById('close-video')
    if(demoGarden){
        demoGarden.addEventListener('click', () => {

            let element = document.getElementById('video-garden');
            element.style.display = "block"

        }, false)
    }
    
    if(btnCloseGarden){
        btnCloseGarden.addEventListener('click', () => {
            let element = document.getElementById('video-garden');
            element.style.display = "none"
        }, false)
    }
   
}
)