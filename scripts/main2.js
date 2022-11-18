
let map2 = L.map('map2').setView([15.841314,-90.163280], 6.92);

L.tileLayer('https://api.mapbox.com/styles/v1/andrrearivera/clale03uc004j15qmw8328e5l/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcnJlYXJpdmVyYSIsImEiOiJjbGFsZG1tYXAwMW1nM3FtOHdkbTN4OGhqIn0.OGcA5aEMlnnwCyUI4A8ftg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map2);

for (let i = 0; i < places.length; i++){
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo(map2);
}
