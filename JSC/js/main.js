
  var config = {
    apiKey: "AIzaSyDGov3vh2Qs1-aYeeIW6qqj-_rkKp3pXR8",
    authDomain: "reservation-site-38066.firebaseapp.com",
    databaseURL: "https://reservation-site-38066.firebaseio.com",
    storageBucket: "reservation-site-38066.appspot.com",
    messagingSenderId: "321397700598"
  };
  firebase.initializeApp(config);
//reservation section
var database = firebase.database();
$('#reservation-form').on('submit', function (e) {
  // by default a form submit reloads the DOM which will subsequently reload all our JS
  e.preventDefault();

 // grab user's comment from input field
  var userEmail = $('#reservation-email').val();
  // clear the user's comment from the input (for UX purposes)
  $('#reservation-email').val('')

  var userName = $('#reservation-name').val();
  // clear the user's name from the input (for UX purposes)
  $('#reservation-name').val('') 

  var userMonth = $('#reservation-month').val();
  // clear the user's name from the input (for UX purposes)
  $('#reservation-month').val('') 

  // create a section for reservations data in your db
  var reservationReference = database.ref('reservations');
  // use the set method to save data to the comments
  reservationReference.push({
    name: userName,
    email: userEmail,
    month: userMonth,
  });
});

function getReservation() {
// on initial load and addition of each reservation update the view
database.ref('reservations').on('value', function(results) {
  // grab element to hook to
var allReservations = results.val();
    var reservations = [];
    for (var item in allReservations) {
      var context = {
        name: allReservations[item].name,
        email: allReservations[item].reservation,
        month: allReservations[item].month,
        reservationId: item
      };
      // Get the HTML from our Handlebars comment template
      var source = $("#reservation-template").html();
      // Compile our Handlebars template
      var template = Handlebars.compile(source);
      // Pass the data for this comment (context) into the template
      var reservationListElement = template(context);
      // push newly created element to array of comments
      reservations.push(reservationListElement)
    }
    // Update the DOM
    $('.reservations').empty()
    // append each comment to the list of comments in the DOM
    for (var i in reservations) {
      $('.reservations').append(reservations[i])
    }
  });
}  

getReservation()

//comment section
var database = firebase.database();
$('#comment-form').on('submit', function (e) {
  // by default a form submit reloads the DOM which will subsequently reload all our JS
  e.preventDefault();
  // to avoid this we preventDefault()

 // grab user's comment from input field
  var userInput = $('#comment').val();
  // clear the user's comment from the input (for UX purposes)
  $('#comment').val('')

  var userName = $('#comment-name').val();
  // clear the user's name from the input (for UX purposes)
  $('#comment-name').val('') 
  // create a section for comments data in your db
  var commentsReference = database.ref('comments');
  // use the set method to save data to the comments
  commentsReference.push({
    comment: userInput,
    name: userName,
  });
});

function getComments() {
  database.ref('comments').on('value', function (results) {
    var allComments = results.val();
    var comments = [];
    for (var item in allComments) {
      var context = {
        name: allComments[item].name,
        comment: allComments[item].comment,
        commentId: item
      };
      // Get the HTML from our Handlebars comment template
      var source = $("#comment-template").html();
      // Compile our Handlebars template
      var template = Handlebars.compile(source);
      // Pass the data for this comment (context) into the template
      var commentListElement = template(context);
      // push newly created element to array of comments
      comments.push(commentListElement)
    }
    // Update the DOM
    $('.comments').empty()
    // append each comment to the list of comments in the DOM
    for (var i in comments) {
      $('.comments').append(comments[i])
    }
  });
}

getComments();




//month selector
$("#btn").click(function() {
  "use strict";
  $.fn.openSelect = function() {
    return this.each(function(idx, domEl) {
      if (document.createEvent) {
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        domEl.dispatchEvent(event);
      } else if (element.fireEvent) {
        domEl.fireEvent("onmousedown");
      }
    });
  }
  $("#menu-toggle").openSelect();

});

// initialize the configuration of map
function initMap() {
  // use JS's built-in Navigator to get user's lat/lng coordinates
  navigator.geolocation.getCurrentPosition(function(position) {
    // create an object to store lat/lng data
    var userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.898126, lng: -87.677191},
    zoom: 11,
    scrollwheel: false
});
    
    var marker = new google.maps.Marker({
    position: {lat: 41.898126, lng: -87.677191},
    map: map,
    title: 'Fernwey'
  	});
  });
}


initMap();