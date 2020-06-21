var map;
var service;
var infowindow;
let searchResults

function searchHospital() {
    let pos;
if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        

  var pyrmont = new google.maps.LatLng(pos.lat, pos.lng);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '1500',
    type: ['hospital']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
        
        
        })
        
        
        };


}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      searchResults = results
      console.log(results, "SOY RESULTSSSS")
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}