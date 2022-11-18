let map = L.map('map').setView([29.910,-81.303], 13.4);


L.tileLayer('https://api.mapbox.com/styles/v1/andrrearivera/clale03uc004j15qmw8328e5l/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcnJlYXJpdmVyYSIsImEiOiJjbGFsZG1tYXAwMW1nM3FtOHdkbTN4OGhqIn0.OGcA5aEMlnnwCyUI4A8ftg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker = L.marker([29.920169354945784, -81.32384262957684]).addTo(map);
let marker2 = L.marker([29.893744182385873, -81.31308778171257]).addTo(map);
let marker3 = L.marker([29.92777603212195, -81.29522488427064]).addTo(map);
let marker4 = L.marker([29.89459807414513, -81.31442445810659]).addTo(map);

marker.bindPopup("<b>DOS Coffee and Wine</b><br>This is my favorite coffee shop").openPopup();
marker2.bindPopup("<b>Kilwin's</b><br>This is my favorite chocolate shop");
marker3.bindPopup("<b>Vilano Beach</b><br>My favorite beach spot");
marker4.bindPopup("<b>Second Read Books</b><br>A cute little bookshop");
