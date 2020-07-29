
$(function() {
    $('body').vegas({
        slides: [
            { src: 'sample01.jpg' },
            { src: 'sample02.jpg' },
            { src: 'sample03.jpg' },
            { src: 'sample04.jpg' }
        ],

        delay: 7000,
        timer: false,
        overlay: 'vegas/overlays/01.png',
        transition: 'fade2',
        animation: 'random',
    });
});