function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.6962414016318, -73.94536973163159),
        zoom: 14,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}