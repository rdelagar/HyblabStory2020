$(document).ready(function () {

    isActiveTimeout();
    let p = document.getElementById("txt-grotte");

    let start = false;

    let typewriter = new Typewriter(p, {
        loop: false,
        delay: 5,
        cursor: ""
    });

    let str1 = "L’afflux de voyageur ne nous permet plus de trouver des grottes aussi facilement. ";
    let str2 = "Le bois se fait de plus en plus rare. Malgré moi, les tentes représentent un confort indéniable pour notre voyage. ";

    function isActiveTimeout() {
        setTimeout(function () {
            isActive();
        }, 500);
    }

    function isActive() {
        if ($(".sec-txt-grotte:visible").hasClass("active") && !start) {
            typewriter.typeString(str1)
                .pauseFor(1500)
                .typeString(str2)
                .start();
            start = true;
        }
        isActiveTimeout();
    }

});