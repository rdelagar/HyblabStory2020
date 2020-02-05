$(document).ready(function () {

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });

    $("section").hide();
    $(".anim-img").show().css("z-index", "-1");
    $("section").first().show();

    let scroll = true;
    loadImage();

    $(window).on("wheel", function (e) {
        if(scroll) {
            let s = $("section:visible").first();
            if (e.originalEvent.deltaY > 0 && !s.hasClass("no-scroll")) {
                slideL(s);
            } else if(e.originalEvent.deltaY < 0 && !s.hasClass("no-back")) {
                slideR(s);
            }
        }
    });

    $("button.next").on("click", function () {
        let s = $("section:visible").first();

        if($(this).hasClass("tashi") || $(this).hasClass("aide") || $(this).hasClass("tentes")) {
            $(s).delay(1000).hide(0);
            slideL(s.next());
        } else {
            slideL(s);
        }
    });

    function slideL(s) {
        $(s).delay(1000).hide(0);
        $(s.next()).show("slide", {direction: "right"}, 1000).css("z-index", "6");
        scroll = false;
        displayScroll(s.next());
        wait();
    }

    function slideR(s) {
        $(s).delay(1000).hide(0);
        $(s.prev()).show("slide", {direction: "left"}, 1000).css("z-index", "7");
        scroll = false;
        displayScroll(s.prev());
        wait();
    }

    function wait() {
        setTimeout(function() {scroll = true}, 1000);
    }

    function loadImage() {
        setTimeout(function() {$(".anim-img").hide().css("z-index", "1")}, 10);
    }

    function displayScroll(s) {
        if(s.hasClass("no-scroll")) {
            $(".center-con").delay(500).hide(0);
        } else {
            $(".center-con").delay(1000).show(0);
        }
    }

});