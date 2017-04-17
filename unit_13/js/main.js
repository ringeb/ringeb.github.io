$(function(){
  $('#mainwrapper').css('display', 'none');
  $('#mainwrapper').fadeIn(3000);
});


var token = '402445702.d59212e.80b303912d3f42269f4b9c04e3b7ecdd',
    num_photos = 3;
 
$.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        console.log(data);
        for( x in data.data ){
            $('#rudr_instafeed').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
        }
    },
    error: function(data){
        console.log(data);
    }
});

hideMenu = function() {
var div = document.getElementById('box1');
div.style.display = 'none';

}
$('nav a:first').addClass('activeNav');

$("nav a").on('click', function(event) {
  $(".activeNav").removeClass("activeNav");
  $(this).addClass("activeNav");
  
  event.preventDefault();
  var hash = this.hash;
  
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){  
    
  window.location.hash = hash;
  });
});
// Scrolling activates nav buttons
$(window).scroll(function() {
  //get position of scrollbar 
  var windscroll = $(window).scrollTop();
  // iterate to check each '.page' element
  $('.page').each(function(i) {
    // check if the page element's scroll position is < current pos
    if ($(this).position().top <= windscroll + $(".page").height()/2) {
      // if so switch the active nav link 
      $('a.activeNav').removeClass('activeNav');
      $('a').eq(i).addClass('activeNav');
    }
  });

}).scroll();

$("button").click(function(){
  $(".thanksMsg").css("visibility","visible");
});