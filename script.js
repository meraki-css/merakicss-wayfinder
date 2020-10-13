/* WAYFINDER */
$(document).ready(function() {
  
  $(".wayfinder-menu").click(function() {
    $(".bar1, .bar2, .bar3").toggleClass("change");
    $(".catalog > li").fadeToggle();
  });

  function menuResize() {
    var vw = window.innerWidth;
    if (vw <= "668") {
      $(".catalog > li").css("display", "none");
    } else {
      $(".catalog > li").css("display", "flex");
    }
  }

})