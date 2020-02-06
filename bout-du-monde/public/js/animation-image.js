$(document).ready(function () {

    $(".svg").on("mouseover", function () {
        $(this).css({'transform': 'scale('+ 1.05 +')'});
    });

    $(".svg").on("mouseout", function () {
        $(this).css({'transform': 'scale('+ 1 +')'});
    });

    $(".svg").on("mousemove", function (e) {
        $(this).css({'transform-origin':
                ((e.pageX - $(this).offset().left) / $(this).width()) * 90 + '% ' +
                ((e.pageY - $(this).offset().top) / $(this).height()) * 90 +'%'});
    });

    $(".infos").on("mouseover", function () {
        alert("ok")
    })


});