$(document).ready(function () {
    isActiveTimeout();
    let p = document.getElementById("txt-tashi");

    let start = false;

    let typewriter = new Typewriter(p, {
        loop: false,
        delay: 5,
        cursor: ""
    });

    let str1 = "Mais, pendant deux secondes, en apercevant Lundup qui avait 6 ans lors de mon dernier séjour, mon esprit bascule vingt-cinq ans en arrière, il ressemble tellement à son père ! ";
    let str2 = "Nous tombons dans leurs bras avec la même complicité qu’autrefois. ";

    function isActiveTimeout() {
        setTimeout(function () {
            isActive();
        }, 500);
    }

    function isActive() {
        if ($(".sec-txt-tashi:visible").hasClass("active") && !start) {
            typewriter.typeString(str1)
                .pauseFor(1500)
                .typeString(str2)
                .callFunction(() => {
                     $(".center-con").show();
                })
                .start();
            start = true;
        }
        isActiveTimeout();
    }

});