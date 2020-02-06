$(document).ready(function () {

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });

    let map;
    let one = true;
    var Page = (function () {

        var config = {
                $bookBlock: $('#bb-bookblock'),
                $navNext: $('#bb-nav-next'),
                $navPrev: $('#bb-nav-prev'),
                $navFirst: $('#bb-nav-first'),
                $navLast: $('#bb-nav-last')
            },
            init = function () {
                config.$bookBlock.bookblock({
                    speed: 1000,
                    shadowSides: 0.8,
                    shadowFlip: 0.7
                });
                initEvents();
            },
            initEvents = function () {

                $(window).on("wheel", function (e) {
                    if (e.isTrigger !== undefined || e.originalEvent.deltaY > 0) {
                        if (!$("section:visible").first().hasClass("no-scroll")) {
                            config.$bookBlock.bookblock('next');
                        }
                    } else {
                        /*if($("section:visible").first().hasClass("map")) {
                            $(".ok").trigger("click");
                        }*/
                        if (!$("section:visible").first().hasClass("no-back")) {
                            config.$bookBlock.bookblock('prev');
                        }
                    }
                });

            };

        $(".next").on("click", function () {
            if($(this).hasClass("tashi")) {
                config.$bookBlock.bookblock('jump', '6');
            } else if($(this).hasClass("aide")) {
                config.$bookBlock.bookblock('jump', '10');
            } else if($(this).hasClass("tentes")) {
                config.$bookBlock.bookblock('jump', '14');
            } else {
                config.$bookBlock.bookblock('next');
            }
        });

        return {init: init};
    })();

    Page.init();
});