$(window).on("load", function () {

    $(".loader").hide();

    $("section").hide();
    $("section").first().show().addClass("active");
    $("section").first().children(".div-txt").show();

    let scroll = false;
    let launch = false;

    $("section").on("wheel", function (e) {

        if (!launch) {
            scrollMap();
        } else if (scroll) {
            let s = $("section:visible").first();
            if (e.originalEvent.deltaY > 0 && !s.hasClass("no-scroll")) { //scroll next
                slideL(s);
                scroll = false;
            } else if (e.originalEvent.deltaY < 0 && !s.hasClass("no-back")) { //scroll back
                slideR(s);
                scroll = false;
            }
        }

        scrollStop();
    });

    $(".next").on("click", function () {
        let s = $("section:visible").first();

        if ($(this).hasClass("tashi") || $(this).hasClass("aide") || $(this).hasClass("tentes")) {
            s.delay(1000).hide(0);
            slideL(s.next());
        } else {
            slideL(s);
        }
    });

    $(".back-svg").on("click", function () {
        let s = $("section:visible").first();
        slideR(s);
    });

    $(".puce").hover(function () {
        $(".fond-popup").show();
    }, function () {
        $(".fond-popup").hide();
    });

    $(".puce-n1").hover(function () {
        let right = ($(window).width() - ($(this).offset().left + $(this).outerWidth()));
        $(".popup1").show().css({"top": $(this).offset().top, "right": right})
    }, function () {
        $(".popup1").hide();
    });

    $(".puce-n2").hover(function () {
        let right = ($(window).width() - ($(this).offset().left + $(this).outerWidth()));
        $(".popup2").show().css({"top": $(this).offset().top, "left": $(this).offset().left})
    }, function () {
        $(".popup2").hide();
    });

    $(".puce-n3").hover(function () {
        $(".popup3").show().css({"top": $(this).offset().top, "left": $(this).offset().left})
    }, function () {
        $(".popup3").hide();
    });

    function slideL(s) {
        $(".puce").hide();
        s.children(".div-txt").delay(1000).hide(0);

        s.css("z-index", "-1");
        s.next().css({"z-index": "1"});
        s.delay(1000).hide(0);
        s.next().show("slide", {direction: "right"}, 1000);

        s.next().children(".div-txt").delay(1000).show(0);

        if (s.next().hasClass("anim-attaque")) {
            loadAnim(0, "json/anim-attaque.json", false);
        } else if (s.next().hasClass("anim-arrivee")) {
            loadAnim(1, "json/anim-arrivee.json", true);
        } else if (s.next().hasClass("anim-chute")) {
            loadAnim(2, "json/anim-chute.json", true);
        } else if (s.next().hasClass("anim-seul")) {
            loadAnim(3, "json/anim-seul.json", true);
        } else if (s.next().hasClass("anim-grotte")) {
            loadAnim(4, "json/anim-grotte.json", true);
        } else if (s.next().hasClass("sec-txt-walk")) {
            displayPopup(1);
        } else if (s.next().hasClass("sec-txt-help")) {
            displayPopup(2);
        } else if (s.next().hasClass("sec-txt-tentes")) {
            displayPopup(3);
        }
    }

    function slideR(s) {
        s.children(".div-txt").delay(1000).hide(0);
        $(".puce").hide();
        s.css("z-index", "-1");
        s.prev().css("z-index", "1");
        s.delay(1000).hide(0);
        s.prev().show("slide", {direction: "left"}, 1000);
        s.prev().children(".div-txt").delay(1000).show(0);

        if (s.prev().hasClass("sec-txt-walk")) {
            displayPopup(1);
        } else if (s.prev().hasClass("sec-txt-help")) {
            displayPopup(2);
        } else if (s.prev().hasClass("sec-txt-tentes")) {
            displayPopup(3);
        }
    }

    function scrollStop() {
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
            scroll = true;
        }, 500));
    }

    function scrollMap() {
        if ($(window).scrollTop() + $(window).height() + 1 >= $(document).height()) {
            $('html, body').css({
                overflow: 'hidden'
            });
            launch = true;
            let s = $("section:visible").first();
            $("section").css({"top": $(".main").height() - s.next().height()});
        }
    }

    function loadAnim(id, path, loop) {
        let wrapp = document.getElementsByClassName("anim")[id];
        let anim = bodymovin.loadAnimation({
            wrapper: wrapp,
            animType: 'svg',
            loop: loop,
            autoplay: false,
            path: path
        });
        startAnim(anim);
    }

    function startAnim(anim) {
        setTimeout(function () {
            anim.play();
        }, 200);
    }

    function displayPopup(id) {
        $(".puce-n" + id).delay(1000).show(0);
    }

    $(".secret").on("click", function () {
        let s = $("section:visible").first();
        slideL(s);
    });

    let svg = $("object")[0].contentDocument.documentElement;
    let BDM = svg.getElementsByClassName("BDM");
    let Audencia = svg.getElementsByClassName("Audencia");
    let AGR = svg.getElementsByClassName("AGR");
    let Polytech = svg.getElementsByClassName("Polytech");

    let Hyblab = svg.getElementsByClassName("Hyblab");
    let Medialab = svg.getElementsByClassName("Medialab");
    let OpenSource = svg.getElementsByClassName("Open-Source");
    let UnivNantes = svg.getElementsByClassName("Univ-Nantes");
    let CC = svg.getElementsByClassName("CC");

    let AR = svg.getElementsByClassName("AR");
    let SP = svg.getElementsByClassName("SP");
    let RG = svg.getElementsByClassName("RG");
    let JG = svg.getElementsByClassName("JG");
    let RD = svg.getElementsByClassName("RD");
    let TOD = svg.getElementsByClassName("TOD");
    let ZP = svg.getElementsByClassName("ZP");
    let JBG = svg.getElementsByClassName("JBG");
    let AL = svg.getElementsByClassName("AL");

    $(svg.getElementsByClassName("svg-lien")).hover(function () {
        $(this).css({"cursor": "pointer"});
    }, function () {

    });

    $(BDM).on("click", function () {
        window.open("https://www.revue-boutsdumonde.com/");
    });

    $(AGR).on("click", function () {
        window.open("https://www.agrnantes.fr/");
    });

    $(Audencia).on("click", function () {
        window.open("https://www.audencia.com/");
    });

    $(Polytech).on("click", function () {
        window.open("https://polytech.univ-nantes.fr/");
    });

    $(Hyblab).on("click", function () {
        window.open("https://www.hyblab.fr/");
    });

    $(Medialab).on("click", function () {
        window.open("https://medialab.sciencespo.fr/");
    });

    $(OpenSource).on("click", function () {
        window.open("https://opensource.org/");
    });

    $(UnivNantes).on("click", function () {
        window.open("https://www.univ-nantes.fr/");
    });

    $(CC).on("click", function () {
        window.open("https://creativecommons.org/licenses/by/2.0/");
    });

    $(AR).on("click", function () {
        window.open("https://www.linkedin.com/in/ad%C3%A8le-rafii/");
    });

    $(SP).on("click", function () {
        window.open("https://www.linkedin.com/in/st%C3%A9phen-proux-a01929194/");
    });

    $(RG).on("click", function () {
        window.open("https://www.linkedin.com/in/roxanne-guillaume");
    });

    $(JG).on("click", function () {
        window.open("https://www.linkedin.com/in/juliette-guihard/");
    });

    $(RD).on("click", function () {
        window.open("https://www.linkedin.com/in/r%C3%A9mi-delagarde-676492151/");
    });

    $(TOD).on("click", function () {
        window.open("https://www.linkedin.com/in/thierno-oumar-diallo-114b31163/");
    });

    /*$(ZP).on("click", function () {
        window.open("https://creativecommons.org/licenses/by/2.0/");
    });*/

    $(JBG).on("click", function () {
        window.open("https://www.linkedin.com/in/jean-baptiste-guy-84a6a3177/");
    });

    $(AL).on("click", function () {
        window.open("https://www.linkedin.com/in/anthony-lusteau-336ab1154/");
    });

});