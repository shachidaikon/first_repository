
$(function() {
    $('body').vegas({
        slides: [
            { src: 'animal crossing1.jpeg' },
            { src: 'zelda.jpeg' },
            { src: 'smabro.jpeg' },
            { src: 'switch.jpg' }
        ],
        delay: 7000,
        timer: false,
        overlay: 'vegas/overlays/01.png',
        transition: 'fade2',
        animation: 'random',
    });
});
