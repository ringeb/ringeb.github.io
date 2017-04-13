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

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      $(".anchor-link").removeClass("active");
      $(this, ".anchor-link").addClass("active");
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});