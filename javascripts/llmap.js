const address = [53.550303, 9.992291];

const map = L.map('map', {
  zoomControl: false
}).setView(address, 14);

var popup = L.popup()
  .setLatLng(address)
  .setContent('<p>My company. Visit us at: Example.com, P0 xCbF54, Hamburg, Germany.</p>')
  .openOn(map);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map).popup();
