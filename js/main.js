// Header
let menu = document.getElementsByClassName('section-header-left-menu');
let hidenDiv = document.getElementsByClassName('section-header-hiden');
function openMenu(){
    hidenDiv[0].style.width = window.innerWidth/2 + 'px';
    hidenDiv[0].classList.contains('active')?hidenDiv[0].classList.remove('active'):hidenDiv[0].classList.add('active')
}
// Scroll
$(document).ready(function() {
    $(".scrolling").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 1000);
      return false;
    });
});
// Section main
let circle = document.getElementsByClassName('section-main-container-left-circle');
let textMain = document.getElementsByClassName('section-main-container-left-txt');
function changeCircle(id){
    for(let i = 0; i< circle.length; i++){
        circle[i].classList.remove('acCircle');
    }
    circle[id].classList.add('acCircle');
    textMain[0].classList.add('textSwipe');
    textMain[0].innerHTML = '0' + (id+1);
    let a = setTimeout(stopping, 1000);
    function stopping(){
        textMain[0].classList.remove('textSwipe');
        clearTimeout(a);
    }
}
// Section-3-slider
$(document).ready(function () {
    $('.section-3-container-vids').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
    });
});