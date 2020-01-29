$(document).ready(function () {

  $(".answer").hide();
  $("#retry").hide();

  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });

  $("button.choice").on("click", function () {

    if ($(this).hasClass("choice1")) {
      Choice("tashi", "#s7", "s6");
    } else if ($(this).hasClass("choice2")) {
      Choice("catch", "#s11", "s10");
    } else if ($(this).hasClass("choice3")) {
      Choice("food", "#s15", "s14");
    }

    function Choice(cond, s1, s2){
      if ($(this).attr("id") === cond) {
        $(s1).show().css('display', 'flex');
        $("#scroll").delay(1100).show(0);
      } else {
        $(s2).show().css('display', 'flex');
      }
    }

    $("section:visible").first().slideUp(1000).css('display', 'flex');
  });

  $("button.back").on("click", function () {
    SlideU();
  });

  $("button.attack").on("click", function () {
    $(window).off("wheel", Scroll)
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
    console.log("salut");
    let section = $("section:visible").first();
    section.slideUp(1000,EndScroll).css('display', 'flex');
  }

  function SlideU(){
    $("#scroll").hide();
    let section = $("section:visible").first();
    if(section.prev().hasClass("answer")){
      section=section.prev();
    }
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
