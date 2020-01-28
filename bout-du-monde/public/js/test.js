$(document).ready(function () {

    var svgContainer = document.getElementById('test');
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
    });

    var svgContainer = document.getElementById('test2');
    var animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        path: 'grotte-nouveau2.json'
    });

});