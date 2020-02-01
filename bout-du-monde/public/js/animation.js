$(document).ready(function () {

    var svgContainer = document.getElementsByClassName('bb-item')[0];
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: false,
        autoplay: true,
        path: 'json/anim-chute.json'
    });

});