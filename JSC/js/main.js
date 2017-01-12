
  var config = {
    apiKey: "AIzaSyDGov3vh2Qs1-aYeeIW6qqj-_rkKp3pXR8",
    authDomain: "reservation-site-38066.firebaseapp.com",
    databaseURL: "https://reservation-site-38066.firebaseio.com",
    storageBucket: "reservation-site-38066.appspot.com",
    messagingSenderId: "321397700598"
  };
  firebase.initializeApp(config);


var database = firebase.database();

var reservationData = {};

$('.reservation-month li').on('click', function() {
  reservationData.month = $(this).text();
});

// when submitted, the name data should be set
// and all data should be sent to your database
$('.reservation-form').on('submit', function(event) {
  event.preventDefault();

  reservationData.name = $('.reservation-name').val();


  // create a section for reservations data in your db
  var reservationsReference = database.ref('reservations');

  reservationsReference.push(reservationData);
});


// retrieve reservations data when page loads and when reservations are added
function getReservations() {

  // use reference to database to listen for changes in reservations data
  database.ref('reservations').on('value', function(results) {

    // Get all reservations stored in the results we received back from Firebase
    var allReservations = results.val();

    // remove all list reservations from DOM before appending list reservations
    $('.reservations').empty();

    // iterate (loop) through all reservations coming from database call
    for (var reservation in allReservations) {

      // Create an object literal with the data we'll pass to Handlebars
      var context = {
        name: allReservations[reservation].name,
        day: allReservations[reservation].day,
        reservationId: reservation
      };


      // Get the HTML from our Handlebars reservation template
      var source = $("#reservation-template").html();

      // Compile our Handlebars template
      var template = Handlebars.compile(source);

      // Pass the data for this reservation (context) into the template
      var reservationListItem = template(context);

      // Append newly created reservation to reservations list.
      $('.reservations').append(reservationListItem);

    }

  });

}

// When page loads, get reservations
getReservations();

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
  center: userLocation,
    zoom: 10,
    scrollwheel: false
});
    
    var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Monks Café'
  	});
  });
}

initMap();