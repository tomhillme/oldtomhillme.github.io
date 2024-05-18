$(document).ready(() => {
  $(".soundcloud").hover(() => {
    $("body").css("background", "#FF7700");
    $(".soundcloud").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
    $("#tomhill").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".soundcloud").css("color", "#FF7700");
    $("h1").css("color", "#000000");
    $("#tomhill").css("color", "#000000");
  });

  $(".linkedin").hover(() => {
    $("body").css("background", "#0077B5");
    $(".linkedin").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
    $("#tomhill").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".linkedin").css("color", "#0077B5");
    $("h1").css("color", "#000000");
    $("#tomhill").css("color", "#000000");
  });

  $(".instagram").hover(() => {
    $("body").css("background", "#962fbf");
    $(".instagram").css("color", "#fff");
    $("h1").css("color", "#ffffff");
    $("#tomhill").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".instagram").css("color", "#962fbf");
    $("h1").css("color", "#000000");
    $("#tomhill").css("color", "#000000");
  });

  $(".unsplash").hover(() => {
    $("body").css("background", "#0cda3c");
    $(".unsplash").css("color", "#fff");
    $("h1").css("color", "#ffffff");
    $("#tomhill").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".unsplash").css("color", "#0cda3c");
    $("h1").css("color", "#000000");
    $("#tomhill").css("color", "#000000");
  });

});
