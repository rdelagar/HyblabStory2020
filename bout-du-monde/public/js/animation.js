$(document).ready(function () {

    var svgContainer = document.getElementsByClassName('bb-item')[0];
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
    });

    var svgContainer = document.getElementsByClassName('bb-item')[1];
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
    });

    $("g[filter='url(#__lottie_element_576)']").on("click", function () {
        alert("ok")
    })

});