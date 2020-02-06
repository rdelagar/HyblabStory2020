$(document).ready(function () {

    isActiveTimeout();
    let p = document.getElementById("txt-tentes");

    let start = false;

    let typewriter = new Typewriter(p, {
        loop: false,
        delay: 5,
        cursor: ""
    });

    let str1 = "Alors pour nous aujourd’hui, plus de nuits inconfortables dans les grottes, ni de tsampa la farine d’orge grillée à tous les repas. ";
    let str2 = "Lundup, le fils de Tashi, nous a préparé une expédition avec nuits sous tente et cuisinier. ";
    let str3 = "Les porteurs nous rejoignent pour installer le campement, 3 tentes et un espace cuisine. ";
    let str4 = "Une cuisine digne d’un 3*, et des repas à base de poulet, riz, lentilles et épices. ";
    let str5 = "Bien loin des soupes réchauffées au feu de camp. ";

    function isActiveTimeout() {
        setTimeout(function () {
            isActive();
        }, 500);
    }

    function isActive() {
        if ($(".sec-txt-tentes:visible").hasClass("active") && !start) {
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