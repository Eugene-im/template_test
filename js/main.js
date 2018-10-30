$(document).ready(function() {
  $(".slider").slick({});
  $(".slide_1,.slide_2,.slide_3").slick({
    slidesToShow: 3,
    slidesToScroll: 2
  });

  $('#tab1').click(function(){
    $('slide_1').toggleClass('active')
  });
  $('#tab2').click(function(){
    $('slide_2').toggleClass('active')
  });
  $('#tab3').click(function(){
    $('slide_3').toggleClass('active')
  });
});
