$(document).ready(function () {

    isActiveTimeout();
    let p = document.getElementById("txt-help");

    let start = false;

    let typewriter = new Typewriter(p, {
        loop: false,
        delay: 5,
        cursor: ""
    });


    let str1 = "L’aide de nos compagnons de voyage m’est précieuse. ";
    let str2 = "Malheureusement, Tashi, en voulant me retenir, a subi le même sort. ";
    let str3 = "Nous avons eu très peur. ";
    let str4 = "Les porteurs, agiles dans ces circonstances, nous ont aidé à sortir de l’eau. ";
    let str5 = "Et, David, mon fils, s’est empressé de nous sécher.";

    function isActiveTimeout() {
        setTimeout(function () {
            isActive();
        }, 500);
    }

    function isActive() {
        if ($(".sec-txt-help:visible").hasClass("active") && !start) {
            typewriter.typeString(str1)
                .pauseFor(1500)
                .typeString(str2)
                .pauseFor(1500)
                .typeString(str3)
                .pauseFor(1500)
                .typeString(str4)
                .pauseFor(1500)
                .typeString(str5)
                .callFunction(() => {
                    $(".center-con").show();
                })
                .start();
            start = true;
        }
        isActiveTimeout();
    }

});