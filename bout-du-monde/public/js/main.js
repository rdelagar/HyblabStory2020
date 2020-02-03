$(document).ready(function () {

  $("#retry").hide();
  $(".start").addClass("active");
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });

  function whichAnimationEvent(){
    var t,
        el = document.createElement("fakeelement");

    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }

  var animationEvent = whichAnimationEvent();

  $("button.choice").on("click", function () {

    if ($(this).hasClass("choice1")) {
      Choice($(this), "tashi", "#s7", "#s6");
    } else if ($(this).hasClass("choice2")) {
      Choice($(this), "catch", "#s11", "#s10");
    } else if ($(this).hasClass("choice3")) {
      Choice($(this), "food", "#s15", "#s14");
    }
  });

  function Choice(button, cond, s1, s2){
    let section = $("section:visible").first()
    $(window).off("wheel", Scroll);
    if (button.attr("id") === cond) {
      SlideD(section, $(s1).first());
    } else {
      SlideD(section, $(s2).first());
    }
  }

  $("button.back").on("click", function () {
    let section = $("section:visible").first()
    SlideU(section, section.prev());
  });

  $("button.attack").on("click", function () {
    $(window).off("wheel", Scroll);
    let section = $("section:visible").first()
    SlideD(section, section.next());
  });

  $("#scroll").on("click", function () {
    $(window).off("wheel", Scroll);
    let section = $("section:visible").first()
    SlideD(section, section.next());
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
    if (e.originalEvent.deltaY > 0) {
      if(section.hasClass("normal")){
        let section = $("section:visible").first()
        SlideD(section, section.next());
      }else{
        $(window).one("wheel", Scroll);
      }
    } else if (e.originalEvent.deltaY < 0) {
      let section = $("section:visible").first()
      if(section.prev().hasClass("answer")){
        SlideU(section, section.prev().prev());
      }else if(section.hasClass("start")){
        $(window).one("wheel", Scroll);
      }else{
        SlideU(section, section.prev());
      }
    }
  }

  function SlideD(s1,s2){
    $("#scroll").hide();
    s1.addClass("exitTransition");
    s2.addClass("active enterTransition onTop");

    s2.one(animationEvent,
              function() {
                s2.removeClass("enterTransition onTop");
                s1.removeClass("active exitTransition");
                EndScroll();
              });
  }

  function SlideU(s1,s2){
    $("#scroll").hide();
    s1.addClass("exitBackTransition onTop");
    s2.addClass("active enterBackTransition");

    s1.one(animationEvent,
              function() {
                s2.removeClass("enterBackTransition");
                s1.removeClass("active exitBackTransition onTop");
                EndScroll();
              });
  }

  function EndScroll(){
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
