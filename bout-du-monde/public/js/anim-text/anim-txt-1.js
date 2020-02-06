$(document).ready(function () {

    isActiveTimeout();
    let p = document.getElementById("txt-seul");
    let start = false;

    let typewriter = new Typewriter(p, {
        loop: false,
        delay: 5,
        cursor: ""
    });

    let str1 = "Il nous est impossible de parcourir la vallée sans être accompagnés. ";
    let str2 = "Après les quelques jours d’acclimatation obligatoire, nous devons respecter les règles imposées par le gouvernement indien. ";
    let str3 = "Ces règles limitent les accidents, de plus en plus nombreux. ";
    let str4 = "Depuis quelques années, la Chadar est très fréquentée par des Indiens peu entraînés à la marche pour cet environnement si changeant, si hasardeux et si dangereux ! ";
    let str5 = "Les agences indiennes présentent ce trek comme étant l’aventure à vivre absolument. ";
    let str6 = "Résultat, plusieurs morts l’an dernier par ignorance et mauvaise préparation. ";
    let str7 = "L’altitude ne pardonne pas. Par prudence, nous prendrons donc la route avec Tashi et Lundup. ";

    function isActiveTimeout() {
        setTimeout(function () {
            isActive();
        }, 500);
    }

    function isActive() {
        if ($(".sec-txt-seul:visible").hasClass("active") && !start) {
            typewriter.typeString(str1)
                .pauseFor(1500)
                .typeString(str2)
                .pauseFor(1500)
                .typeString(str3)
                .pauseFor(1500)
                .typeString(str4)
                .pauseFor(1500)
                .typeString(str5)
                .pauseFor(1500)
                .typeString(str6)
                .pauseFor(1500)
                .typeString(str7)
                .start();
            start = true;
        }
        isActiveTimeout();
    }

});