$(document).ready(function () {

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

    $("button.next").on("click", function () {
        let s = $("section:visible").first();

        if ($(this).hasClass("tashi") || $(this).hasClass("aide") || $(this).hasClass("tentes")) {
            s.delay(1000).hide(0);
            slideL(s.next());
        } else {
            slideL(s);
        }
    });

    $(".puce").hover(function () {
        $(".fond-popup").show();
    }, function () {
        $(".fond-popup").hide();
    });

    $(".puce-n1").hover(function () {
        $(".popup1").show().css({"top": $(this).offset().top, "left": $(this).offset().left})
    }, function () {
        $(".popup1").hide();
    });

    $(".puce-n2").hover(function () {
        let right = ($(window).width() - ($(this).offset().left + $(this).outerWidth()));
        $(".popup2").show().css({"top": $(this).offset().top, "right": right})
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
        } else if(s.next().hasClass("sec-txt-help")) {
            displayPopup(1);
        } else if(s.next().hasClass("sec-txt-walk")) {
            displayPopup(2);
        } else if(s.next().hasClass("sec-txt-tentes")) {
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

        if(s.prev().hasClass("sec-txt-help")) {
            displayPopup(1);
        } else if(s.prev().hasClass("sec-txt-walk")) {
            displayPopup(2);
        } else if(s.prev().hasClass("sec-txt-tentes")) {
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
    })

});