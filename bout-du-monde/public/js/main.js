$(document).ready(function () {

  $(".answer").hide();
  $("#retry").hide();

  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });

  $("button.choice").on("click", function () {

    if ($(this).hasClass("choice1")) {
      if ($(this).attr("id") === "tashi") {
        $("#s7").show().css('display', 'flex');
        $("#scroll").delay(1100).show(0);
      } else {
        $("#s6").show().css('display', 'flex');
      }

    } else if ($(this).hasClass("choice2")) {
      if ($(this).attr("id") === "catch") {
        $("#s11").show().css('display', 'flex');
        $("#scroll").delay(1100).show(0);
      } else {
        $("#s10").show().css('display', 'flex');
      }

    } else if ($(this).hasClass("choice3")) {
      if ($(this).attr("id") === "food") {
        $("#s15").show().css('display', 'flex');
        $("#scroll").delay(1100).show(0);
      } else {
        $("#s14").show().css('display', 'flex');
      }
    }

    $("section:visible").first().slideUp(1000).css('display', 'flex');
  });

  $("button.back").on("click", function () {
    SlideU();
  });

  $("button.attack").on("click", function () {
    SlideD();
  });

  $("#scroll").on("click", function () {
    SlideD();
  });

  $("#retry").on("click", function () {
    /*$("section").show().css('display', 'flex');
    $(".answer").hide();
    $("section:visible").first().slideDown(1000).css('display', 'flex');
    $("#scroll").delay(1100).show(0);
    $("#retry").hide();*/

    /*$("#sec-story").hide();
    $("#s1-map").show();*/
    location.reload();
  });

  $(window).one("wheel", Scroll);

  function Scroll(e){
    let section = $("section:visible").first();
    if (e.originalEvent.deltaY > 0 && section.hasClass("normal")) {
      SlideD();
    } else if (e.originalEvent.deltaY < 0) {
      SlideU();
    }
  }

  function SlideD(){
    $("#scroll").hide();

    let section = $("section:visible").first();
    section.next().show().css('display', 'flex');
    section.slideUp(1000,EndScroll).css('display', 'flex');
  }

  function SlideU(){
    $("#scroll").hide();
    let section = $("section:visible").first();
    section.prev().slideDown(1000, EndScroll).css('display', 'flex');
  }

  function EndScroll(){
    console.log($("section:visible").first());
    if($("section:visible").first().hasClass("normal")){
      $("#scroll").show();
    }
    $(window).one("wheel", Scroll);
  }
  /*let anim;

  let animData = {
  container: document.getElementById('animation1'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  rendererSettings: {
  progressiveLoad:false
},
path: 'data.json'
};

anim = bodymovin.loadAnimation(animData);

anim.addEventListener('DOMLoaded', function () {
console.log("loaded");
});*/

});
