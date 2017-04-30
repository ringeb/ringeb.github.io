$(function(){
  $('#mainwrapper').css('display', 'none');
  $('#mainwrapper').fadeIn(3000);
});


var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");

hideMenu = function() {
var div = document.getElementById('box1');
div.style.display = 'none';

}
$('aside a:first').addClass('activeAside');

$("aside a").on('click', function(event) {
  $(".activeAside").removeClass("activeAside");
  $(this).addClass("activeAside");
  
  event.preventDefault();
  var hash = this.hash;
  
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1500, function(){  
    
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
      $('a.activeAside').removeClass('activeAside');
      $('a').eq(i).addClass('activeAside');
    }
  });


}).scroll();



