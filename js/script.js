function init() {
    videoReveal();
    AOS.init();
}

function videoReveal() {
    setTimeout(() => {
        document.querySelector('.banner video').src = 'media/video.mp4';
    }, 2700);
    setTimeout(() => {
        document.querySelector('video').style = 'opacity: 0.3';
    }, 4500)
}

init();
