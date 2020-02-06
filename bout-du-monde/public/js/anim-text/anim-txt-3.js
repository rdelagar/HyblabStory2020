$(document).ready(function () {

    isActiveTimeout();
    let p = document.getElementById("txt-walk");

    let start = false;

    let typewriter = new Typewriter(p, {
        loop: false,
        delay: 5,
        cursor: ""
    });

    let str1 = "Il y a 25 ans, nous étions accompagnés d’un guide. ";
    let str2 = "Aujourd’hui, Tashi est notre guide. Six porteurs font le voyage avec nous. ";
    let str3 = "Ils sont agiles, adroits, résistants et courageux et n’hésitent pas à nous venir en aide malgré les tentes et affaires qu’ils transportent. ";

    function isActiveTimeout() {
        setTimeout(function () {
            isActive();
        }, 500);
    }

    function isActive() {
        if ($(".sec-txt-walk:visible").hasClass("active") && !start) {
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