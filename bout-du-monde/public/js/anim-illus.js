$(document).ready(function () {

    checkForChanges();

    let attack = document.getElementsByClassName("anim")[0];
    let animAttack = bodymovin.loadAnimation({
        wrapper: attack,
        animType: 'svg',
        loop: false,
        autoplay: false,
        path: 'json/jacquesattaque.json'
    });

    function checkForChanges() {
        if ($('.anim-attack').hasClass('loaded')) {
            animAttack.play()
        } else {
            setTimeout(checkForChanges, 500);
        }
    }

    $(".anim-attack").attrchange({
        trackValues: true,
        callback: function (event) {
            if(event.newValue === "active") {
                alert("ok")
            }
        }
    });

    svgContainer = document.getElementsByClassName("anim")[1];
    animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        autoplay: true,
        path: 'json/anim-chute.json'
    });

});