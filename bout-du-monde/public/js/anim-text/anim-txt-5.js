$(document).ready(function () {

    isActiveTimeout();
    let p = document.getElementById("txt-rewalk");

    let start = false;

    let typewriter = new Typewriter(p, {
        loop: false,
        delay: 5,
        cursor: ""
    });

    let str1 = "Ces escalades scabreuses nous paraissent encore plus dangereuses que la progression sur la glace. ";
    let str2 = "Au moindre faux pas c’est la chute mortelle ! ";

    function isActiveTimeout() {
        setTimeout(function () {
            isActive();
        }, 500);
    }

    function isActive() {
        if ($(".sec-txt-rewalk:visible").hasClass("active") && !start) {
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