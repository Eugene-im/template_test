$(document).ready(function() {
  $(".slider").slick({
    arrows:false
  });
  $(".slide_1,.slide_2,.slide_3").slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite:true,
    dots:false,
    arrows:true
  });

  $('#tab1').click(function(){
    $('#tab1 span').addClass('act');
    $('#tab2 span').removeClass('act');
    $('#tab3 span').removeClass('act');
    $('.slide_1').addClass('active');
    $('.slide_2').removeClass('active');
    $('.slide_3').removeClass('active');
  });
  $('#tab2').click(function(){
    $('#tab1 span').removeClass('act');
    $('#tab2 span').addClass('act');
    $('#tab3 span').removeClass('act');
    $('.slide_1').removeClass('active');
    $('.slide_2').addClass('active');
    $('.slide_3').removeClass('active');
  });
  $('#tab3').click(function(){
    $('#tab1 span').removeClass('act');
    $('#tab2 span').removeClass('act');
    $('#tab3 span').addClass('act');
    $('.slide_1').removeClass('active');
    $('.slide_2').removeClass('active');
    $('.slide_3').addClass('active');
  });
});
