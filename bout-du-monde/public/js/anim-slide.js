$(document).ready(function () {

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });

    $("section").first().show().addClass("active");

    let scroll = true;
    let first = true;

    /*======Détecte scroll======*/
    $("section").on("wheel", function (e) {

        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            scroll = true; //activer le scroll a la fin de la transition
        }, 250));

        if(scroll) {
            let s = $("section:visible").first();
            if (e.originalEvent.deltaY > 0 && !s.hasClass("no-scroll")) { //scroll next
                slideL(s);
            } else if(e.originalEvent.deltaY < 0 && !s.hasClass("no-back")) { //scroll back
                slideR(s);
            }
        } else {
            console.log("non")
        }
    });

    /*$(".center-con").on("click", function () {
        let s = $("section:visible").first();
        slideL(s);
    });*/

    /*======Détecte click sur bouton======*/
    $("button.next").on("click", function () {
        wait();
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
        $(s).css("z-index", "-1").removeClass("active");
        $(s).delay(1000).hide(0); //slide active
        //$(s).hide()
        $(s.next()).css("z-index", "9");
        $(s.next()).show("slide", {direction: "right"}, 1000).css("z-index", "9").addClass("active"); //slide suivante
        scroll = false; //scroll block pendant la transition
        //wait();
        displayScroll(s.next()); //afficher ou non l'animation "scroll"
    }

    /*======Affiche la slide précédante======*/
    function slideR(s) {
        $(s).css("z-index", "-1").removeClass("active");
        $(s).delay(1000).hide(0); //slide active
        //$(s).hide()
        $(s.prev()).css("z-index", "10");
        $(s.prev()).show("slide", {direction: "left"}, 1000).css("z-index", "10").addClass("active"); //slide précédante
        scroll = false; //scroll block pendant la transition
        //wait();
        displayScroll(s.prev()); //afficher ou non l'animation "scroll"
    }

    /*======Réactive le scroll après la transition======*/
    function wait() {
        setTimeout(function() {scroll = true;}, 500);
    }

    /*======Affiche ou non l'animation scroll======*/
    function displayScroll(s) {
        if(s.hasClass("no-scroll") || s.hasClass("wait-scroll")) {
            $(".center-con").delay(500).hide(0);
        } else {
            $(".center-con").delay(1000).show(0);
        }
    }


});