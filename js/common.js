$(function () {

  $(window).scroll(function () {
    let pos = $(this).scrollTop();
    if (pos > 300) {
      $("#header").addClass("fix");
    } else {
      $("#header").removeClass("fix");
    }

    if (pos > 500) {
      $("body").css({ "background": "#eee" });
    } else {
      $("body").css({ "background": "#fff" });
    }
  });

  // depth2
  $(".depth2 , .depth2_bg").hide();
  $(".gnb > li").mouseenter(function () {
    $(".search").fadeOut();
    $(".btn_search").removeClass("active");
    $("#header").addClass("active");
    $(".depth2_bg").stop().fadeIn();
    $(this).find(".depth2").stop().fadeIn();
  });
  $(".gnb > li").mouseleave(function () {
    $("#header").removeClass("active");
    $(".depth2_bg").stop().fadeOut();
    $(this).find(".depth2").stop().fadeOut();
  });


  // search
  $(".search").hide();
  $(".btn_search").click(function () {
    $(this).toggleClass("active");
    $(".search").fadeToggle();
    $("#header").toggleClass("active");
  });

  // mgnb
  $(".mgnb_wrap").hide();
  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
  });
});