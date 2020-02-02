$(document).ready(function () {

    var svgContainer = document.getElementsByClassName('bb-item')[5];
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        autoplay: true,
        path: 'json/anim-chute.json'
    });

});