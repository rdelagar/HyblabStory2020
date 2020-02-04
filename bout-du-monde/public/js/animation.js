$(document).ready(function () {

    var svgContainer = document.getElementsByTagName("section")[7];
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        autoplay: true,
        path: 'json/anim-chute.json'
    });

});