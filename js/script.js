//Mobile menu
if (window.innerWidth < 1200) {
  $('.menu__catalog').click(function(e) {
    e.preventDefault();
    $('.sidebar__menu').slideToggle();
    $(this).toggleClass('menu__catalog--open');
  });
  
  $('.sidebar__btn').click(function() {
    $(this).next().slideToggle();
  })
}

$('.menu__btn').click(function() {
  $('.menu__list').slideToggle();
  $(this).toggleClass('menu__btn--open');
})

//Footer menu
if (window.innerWidth < 1022) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  })
}

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
