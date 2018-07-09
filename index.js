$(document).ready(() => {
  $(".spotify").hover(() => {
    $("body").css("background", "#DB3340");
    $(".spotify").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".spotify").css("color", "#DB3340");
    $("h1").css("color", "#000000");
  });

  $(".instagram").hover(() => {
    $("body").css("background", "#E8B71A");
    $(".instagram").css("color", "#fff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".instagram").css("color", "#E8B71A");
    $("h1").css("color", "#000000");
  });

  $(".whatsapp").hover(() => {
    $("body").css("background", "#1FDA9A");
    $(".whatsapp").css("color", "#fff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".whatsapp").css("color", "#1FDA9A");
    $("h1").css("color", "#000000");
  });
});
