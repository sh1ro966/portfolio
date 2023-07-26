function init() {
    reveal();
    AOS.init();
}

function reveal() {
    setTimeout(() => {
        document.querySelector('.banner video').src = 'media/video.mp4';
    }, 2700);
    setTimeout(() => {
        document.querySelector('video').style = 'opacity: 0.3';

        document.querySelectorAll('.separator').forEach((el) => {
            el.style = 'opacity: 1';
        });
    }, 4500)
}

init();
