
  var reservationData = {};
  var config = {
    apiKey: "AIzaSyDGov3vh2Qs1-aYeeIW6qqj-_rkKp3pXR8",
    authDomain: "reservation-site-38066.firebaseapp.com",
    databaseURL: "https://reservation-site-38066.firebaseio.com",
    storageBucket: "reservation-site-38066.appspot.com",
    messagingSenderId: "321397700598"
  };
  firebase.initializeApp(config);


var database = firebase.database();



// set the month when an option is clicked on
$('.reservation-month li').click(function() {
  reservationData.day = $(this).text();
});

// when clicked, the name data should be set
// and all data should be sent to your database
$('.reservations').on('submit', function(event) {
  // prevent reloading
  event.preventDefault();

  // get name from input
  reservationData.name = $('.reservation-name').val();

  // push configured data object to database
  database.ref('reservations').push(reservationData);
});


// on initial load and addition of each reservation update the view
database.ref('reservations').on('child_added', function(snapshot) {
  // grab element to hook to
  var reservationList = $('.reservation-list');
  // get data from database
  var reservations = snapshot.val();
  // get your template from your script tag
  var source   = $("#reservation-template").html();
  // compile template
  var template = Handlebars.compile(source);
  // pass data to template to be evaluated within handlebars
  // as the template is created
  var reservationTemplate = template(reservations);
  // append created templated
  reservationList.append(reservationTemplate);
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
  center: userLocation,
    zoom: 4,
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