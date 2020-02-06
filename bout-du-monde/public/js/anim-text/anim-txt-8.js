$(document).ready(function () {

    isActiveTimeout();
    let p = document.getElementById("txt-back");

    let start = false;

    let typewriter = new Typewriter(p, {
        loop: false,
        delay: 5,
        cursor: ""
    });

    let str1 = "Deux jeeps nous attendent pour rejoindre le village de Pishu en empruntant une piste nouvellement construite à coup de dynamite et d’efforts éprouvants. ";
    let str2 = "Cette piste étroite et dangereuse, la Zanskar Valley Road, est en construction depuis des décennies pour relier Padum, la capitale du Zanskar, à Leh, la capitale du Ladakh. ";
    let str3 = "Il en faudra encore autant pour la terminer. ";

    function isActiveTimeout() {
        setTimeout(function () {
            isActive();
        }, 500);
    }

    function isActive() {
        if ($(".sec-txt-back:visible").hasClass("active") && !start) {
            typewriter.typeString(str1)
                .pauseFor(1500)
                .typeString(str2)
                .pauseFor(1500)
                .typeString(str3)
                .callFunction(() => {
                    $(".center-con").show();
                })
                .start();
            start = true;
        }
        isActiveTimeout();
    }

});