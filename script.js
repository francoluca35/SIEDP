var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
////////////////////////////////////////////////////////////////////////////////
    //galeria de videos

    let listVideo = document.querySelectorAll('.video-list .vid');
    let mainVideo = document.querySelector('.main-video video');
    let title = document.querySelector('.main-video .title');
    let title1 = document.querySelector('.main-video .title1');
    
    listVideo.forEach(video =>{
        video.onclick = () =>{
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            if(video.classList.contains('active')){
                let src = video.children[0].getAttribute('src');
                mainVideo.src = src;
                let text = video.children[1].innerHTML;
                title.innerHTML = text;
                let text1 = video.children[2].innerHTML;
                title1.innerHTML = text1
            };
        };
    });


    //form

    const $form = document.querySelector('#form');

    $form.addEventListener('submit', handlesubmit)

    async function handlesubmit(event){
        event.preventDefault();
        const form = new FormData(this)
        const response = await fetch(this.action,{
            method: this.method,
            body: form,
            headers:{
                'Accept': 'application/json'
            }
            })
            if (response.ok){
                this.reset()
                alert('Gracias por contactarnos!!')
            }
    }