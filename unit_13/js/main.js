$(function(){
  $('#mainwrapper').css('display', 'none');
  $('#mainwrapper').fadeIn(3000);
});




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

// this is for the modal image
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

