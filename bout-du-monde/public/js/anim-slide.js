$(document).ready(function () {

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });

    $("section").hide();
    $(".anim-img").show().css("z-index", "-1"); //Obliger d'afficher les images en arrière plan pour les faire charger
    //isLoadImage(0); //Affichage pendant 100ms puis on les cacher

    $("section").first().show().addClass("active");

    let scroll = true;
    let first = true;

    /*======Détecte scroll======*/
    $(window).on("wheel", function (e) {
        if(scroll) {
            let s = $("section:visible").first();
            if (e.originalEvent.deltaY > 0 && !s.hasClass("no-scroll")) { //scroll next
                if(first) {
                    $(".anim-img").hide().css("z-index", "1");
                    first = false;
                }
                slideL(s);
            } else if(e.originalEvent.deltaY < 0 && !s.hasClass("no-back")) { //scroll back
                slideR(s);
            }
        }
    });

    $(".center-con").on("click", function () {
        let s = $("section:visible").first();
        slideL(s);
    });

    /*======Détecte click sur bouton======*/
    $("button.next").on("click", function () {
        let s = $("section:visible").first();
        if($(this).hasClass("tashi") || $(this).hasClass("aide") || $(this).hasClass("tentes")) { //choix faux
            $(s).delay(1000).hide(0);
            slideL(s.next());
        } else { //choix bon
            slideL(s);
        }
    });
    
    $("button.abo").on("click", function () {
        window.location.href = 'https://www.revue-boutsdumonde.com/produit/abonnement/';
    });

    /*======Affiche la slide suivante======*/
    function slideL(s) {
        $(s).delay(1000).hide(0).removeClass("active"); //slide active
        $(s.next()).show("slide", {direction: "right"}, 1000).css("z-index", "6").addClass("active"); //slide suivante
        scroll = false; //scroll block pendant la transition
        displayScroll(s.next()); //afficher ou non l'animation "scroll"
        wait(); //activer le scroll à la fin de la transition
    }

    /*======Affiche la slide précédante======*/
    function slideR(s) {
        $(s).delay(1000).hide(0).removeClass("active"); //slide active
        $(s.prev()).show("slide", {direction: "left"}, 1000).css("z-index", "7").addClass("active"); //slide précédante
        scroll = false; //scroll block pendant la transition
        displayScroll(s.prev()); //afficher ou non l'animation "scroll"
        wait(); //activer le scroll a la fin de la transition
    }

    /*======Réactive le scroll après la transition======*/
    function wait() {
        setTimeout(function() {scroll = true}, 1000);
    }

    /*======Cache les images quand elles ont été chargées======*/
    function isLoadImage() {
        setTimeout(function() {
            $(".anim-img").hide().css("z-index", "1")
        }, 6000);
    }

    /*======Affiche ou non l'animation scroll======*/
    function displayScroll(s) {
        if(s.hasClass("no-scroll") || s.hasClass("wait-scroll")) {
            $(".center-con").delay(500).hide(0);
        } else {
            $(".center-con").delay(1000).show(0);
        }
    }

    /*$("canvas").attrchange({
        trackValues: true,
        callback: function (e) {
            if(e.attributeName === "height") {
                if(e.newValue !== "0") {
                    console.log(e.newValue)
                    //$(this).parent().parent().hide();
                }
            }
        }
    });*/

});