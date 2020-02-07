$(document).ready(function () {

    /*checkForChanges();*/

    let attack = document.getElementsByClassName("anim")[0];
    let animAttack = bodymovin.loadAnimation({
        wrapper: attack,
        animType: 'svg',
        loop: true,
        autoplay: true,
        path: 'json/anim-attaque.json'
    });

    let arrivee = document.getElementsByClassName("anim")[1];
    let animArrivee = bodymovin.loadAnimation({
        wrapper: arrivee,
        animType: 'svg',
        loop: true,
        autoplay: true,
        path: 'json/anim-arrivee.json'
    });

    /*function checkForChanges() {
        if ($('.anim-attack').hasClass('loaded')) {
            animAttack.play()
        } else {
            setTimeout(checkForChanges, 500);
        }
    }*/

    let chute = document.getElementsByClassName("anim")[2];
    let animChute = bodymovin.loadAnimation({
        wrapper: chute,
        animType: 'svg',
        loop: true,
        autoplay: true,
        path: 'json/anim-chute.json'
    });

});