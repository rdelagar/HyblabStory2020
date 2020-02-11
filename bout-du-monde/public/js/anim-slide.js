$('html, body').css({
    overflow: 'hidden'
});

animArray = [];

$(document).ready(function () {
    loadAnim(0, "json/anim-fleuve.json", false);
    loadAnim(1, "json/anim-attaque.json", false);
    loadAnim(2, "json/anim-arrivee.json", false);
    loadAnim(3, "json/anim-chute.json", false);
    loadAnim(4, "json/anim-seul.json", true);
    loadAnim(5, "json/anim-grotte.json", true);

    function loadAnim(id, path, loop) {
        let wrapp = document.getElementsByClassName("anim")[id];
        let anim = bodymovin.loadAnimation({
            wrapper: wrapp,
            animType: 'svg',
            loop: loop,
            autoplay: false,
            path: path
        });
        animArray[id] = anim;
    }
});

$(window).on("load", function () {

    $(".loader").hide();

    $('html, body').css({
        overflowY: 'scroll',
    });

    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1)

    $("section").hide();
    $("section").first().show().addClass("active");

    let scroll = false;
    let launch = false;

    $("section").on("wheel", function (e) {

        $(".scroll-svg").hide();

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

    let one = false;

    /*$(".scroll-plane").on("click", function () {
        if (!launch) {
            window.scrollTo(0, $(window).scrollTop() + 200);
            scrollMap();
        } else if (!one) {
            console.log("ok")
            $(".next").first().trigger("click");
            one = true;
        }
    });*/

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

    $(".player").hover(function () {
        if (!$(this).hasClass("click")) {
            $(this).attr("src", "img/player-hover.svg");
            $(".player-txt").css("visibility", "");
        } else {
            $(".player-txt").css("visibility", "");
        }
    }, function () {
        if (!$(this).hasClass("click")) {
            $(this).attr("src", "img/player.svg");
            $(".player-txt").css("visibility", "hidden");
        } else {
            $(".player-txt").css("visibility", "hidden");
        }
    });

    $(".script").hover(function () {
        if (!$("section:visible").first().hasClass("no-script")) {
            $(this).attr("src", "img/script-hover.svg");
            $(".script-txt").css("visibility", "");
            $(this).css("cursor", "pointer");
        } else {
            $(this).css("cursor", "auto");
        }
    }, function () {
        $(this).attr("src", "img/script.svg");
        $(".script-txt").css("visibility", "hidden");
    });

    $(".script").on("click", function (e) {
        if (!$("section:visible").first().hasClass("no-script")) {
            if (!$(this).hasClass("clicked")) {
                $("section:visible").first().css("z-index", "auto");
                e.stopPropagation();
                $(".wrapper:visible").next().show();
                $(".fond-popup").show();
                $(this).addClass("clicked");
            } else {
                $(this).removeClass("clicked");
            }
        }
    });

    $(".player").on("click", function (e) {
        e.stopPropagation();
        if ($(this).attr("src") === "img/player-close.svg") {
            $(this).attr("src", "img/player.svg");
            $(".player-txt").attr("src", "img/player-txt.svg");
            $(this).removeClass("click");
            $(".wrapper:visible").children()[0].pause();
        } else {
            $(".wrapper:visible").children()[0].play();
            $(this).attr("src", "img/player-close.svg");
            $(".player-txt").attr("src", "img/player-txt-close.svg");
            $(this).addClass("click");
        }
    });

    let first = true;
    $(".player-html").on('ended', function () {
        if ($(".wrapper:visible audio").children().length > 1 && first) {
            $(".wrapper:visible audio")[1].play();
            first = false
        } else {
            first = true;
            $(".player").attr("src", "img/player.svg");
            $(".player-txt").attr("src", "img/player-txt.svg");
            $(".player").removeClass("click");
        }
    });

    $(window).on("click", function () {
        $(".wrapper-popup").hide();
        $(".fond-popup").hide();
        $(".script").removeClass("clicked");
    });


    /*$(".svg-audio").hover(function () {
        if (!$(this).hasClass("sound") && !$(this).hasClass("click")) {
            $(this).attr("src", "img/audio-hover.svg");
        }
    }, function () {
        if (!$(this).hasClass("sound") && !$(this).hasClass("click")) {
            $(this).attr("src", "img/audio.svg");
        }
    });

    $(".svg-texte").hover(function () {
        if (!$(this).hasClass("click")) {
            $(this).attr("src", "img/text-hover.svg");
        }
    }, function () {
        if (!$(this).hasClass("click")) {
            $(this).attr("src", "img/text.svg");
        }
    });

    $(".svg-texte").on("click", function () {
        $("section:visible").first().css("z-index", "auto");
        $(".fond-popup").show();
        $(".svg-audio").addClass("click").attr("src", "img/audio-white.svg");
        $(".svg-textes-audios").addClass("click").attr("src", "img/text-white.svg");
        $(this).addClass("click").attr("src", "img/texts-audios-white.svg");
        $(this).parent().siblings().show();
    });

    $(".fond-popup, .svg-texte-audio").on("click", function () {
        $(".fond-popup").hide();
        $(".svg-texte-audio").hide();
        $(".svg-texte").removeClass("click").attr("src", "img/text.svg");
        $(".svg-audio").removeClass("click").attr("src", "img/audio.svg");
        $(".svg-textes-audios").remove("click").attr("src", "img/texts-audios.svg");
    });

    $(".svg-audio").on("click", function () {
        if(!$(this).hasClass("sound")) {
            $(this).addClass("sound");
            $(this).next()[0].play();
        } else {
            $(this).removeClass("sound").attr("src", "img/audio.svg")
            $(this).next()[0].pause();
        }
        if ($(this).hasClass("click")) {
            $(this).attr("src", "img/audio-close-white.svg");
        } else {
            $(this).attr("src", "img/audio-close.svg");
        }
    });

    $('.svg-audio').next().on('ended', function () {
        $('.svg-audio').removeClass("sound");
        $('.svg-audio').attr("src", "img/audio.svg");
    });*/

    $(".abo").on("click", function () {
        window.open("https://www.revue-boutsdumonde.com/produit/abonnement/");
    });

    function soundReinit() {
        if ($(".wrapper:visible audio").children().length > 1) {
            $(".wrapper:visible audio")[1].pause();
        }
        $(".wrapper:visible audio")[0].pause();
        $(".wrapper:visible").children()[0].pause();
        $(".player").attr("src", "img/player.svg");
        $(".player-txt").attr("src", "img/player-txt.svg");
        $(window).trigger("click");
    }

    function allw() {
        $(".player").attr("src", "img/player-w.svg");
        $(".script").attr("src", "img/script-w.svg");
        $(".player-txt").attr("src", "img/player-txt-w.svg");
        $(".script-txt").attr("src", "img/script-txt-w.svg");
    }


    function slideL(s) {
        /*if($(s).next().hasClass("sound-w")) {
            allw();
        }*/
        soundReinit();
        $(".puce").hide();
        s.children(".div-txt").delay(1000).hide(0);

        s.css("z-index", "-1");
        s.next().css({"z-index": "1"});
        s.delay(1000).hide(0);
        s.next().show("slide", {direction: "right"}, 1000);

        s.next().children(".div-txt").delay(1000).show(0);

        if (s.next().hasClass("anim-fleuve")) {
            //loadAnim(0, "json/anim-fleuve.json", false);
            startAnim(animArray[0]);
            displayTxt();
        } else if (s.next().hasClass("anim-attaque")) {
            //loadAnim(1, "json/anim-attaque.json", false);
            startAnim(animArray[1]);
        } else if (s.next().hasClass("anim-arrivee")) {
            //loadAnim(2, "json/anim-arrivee.json", true);
            startAnim(animArray[2]);
        } else if (s.next().hasClass("anim-chute")) {
            //loadAnim(3, "json/anim-chute.json", true);
            startAnim(animArray[3]);
        } else if (s.next().hasClass("anim-seul")) {
            //loadAnim(4, "json/anim-seul.json", true);
            startAnim(animArray[4]);
        } else if (s.next().hasClass("anim-grotte")) {
            //loadAnim(5, "json/anim-grotte.json", true);
            startAnim(animArray[5]);
        } else if (s.next().hasClass("sec-txt-walk")) {
            displayPopup(1);
        } else if (s.next().hasClass("sec-txt-help")) {
            displayPopup(2);
        } else if (s.next().hasClass("sec-txt-tentes")) {
            displayPopup(3);
        }
    }

    function slideR(s) {
        soundReinit()
        /*if($(s).next().hasClass("sound-w")) {
            allw();
        }*/
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

    function displayPopup(id) {
        $(".puce-n" + id).delay(1000).show(0);
    }

    function displayTxt() {
        $(".txt-title-fleuve").hide();
        $(".txt-p-fleuve1").hide();
        $(".txt-p-fleuve2").hide();

        setTimeout(function () {
            $(".txt-title-fleuve").show();
        }, 1000);

        setTimeout(function () {
            $(".txt-p-fleuve1").show();
        }, 2000);

        setTimeout(function () {
            $(".txt-p-fleuve2").show();
        }, 2500);
    }

    function startAnim(anim) {
        setTimeout(function () {
            anim.play();
        }, 500);
    }

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