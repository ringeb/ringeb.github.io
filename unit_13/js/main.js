$(function(){
  $('#mainwrapper').css('display', 'none');
  $('#mainwrapper').fadeIn(3000);
});

// create a clone of the menu, 
// which we'll only reveal when the user scrolls past a certain position
$('nav').addClass('original').clone().insertAfter('nav').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);

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
            $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');
        }
    },
    error: function(data){
        console.log(data);
    }
});