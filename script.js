// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
var map, heatmap;
var curr_lat = 9.982,
    curr_lon = 76.306;
var radius = 50;
var points = [];

var g_1 = ['rgba(100, 255, 0, 0)',
    'rgba(255, 255, 0, 0.5)',
    'rgba(255, 255, 0, 1)',
    'rgba(255, 255, 0, 1)'
]
var g_2 = ['rgba(255, 255, 0, 0)',
    'rgba(255, 255, 0, 1)',
    'rgba(255, 150, 0, 1)',
    'rgba(255, 100, 0, 1)'
]
var g_3 = ['rgba(255, 100, 0, 0)',
    'rgba(255, 100, 0, 1)',
    'rgba(255, 50, 0, 1)',
    'rgba(255, 10, 0, 1)'
]
var g_4 = ['rgba(255, 0, 0, 0)',
    'rgba(255, 0, 0, 1)',
    'rgba(255, 0, 0, 1)',
    'rgba(255, 0, 0, 1)'
]

function newPoint(lat, lon, intensity) {
    return { location: new google.maps.LatLng(lat, lon), weight: intensity }
};




function initMap() {
    $('#id-locations').children().each(function(index, element) {
        points.push({ location: new google.maps.LatLng(element.getAttribute('lat'), element.getAttribute('lon')), weight: element.getAttribute('weight') });
    });
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: curr_lat, lng: curr_lon },
        mapTypeId: 'roadmap'
    });
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: points,
        map: map,
        radius: radius,
        gradient: g_1
    });
}

$(document).ready(function() {
    var startPos;
    var geoOptions = {
        enableHighAccuracy: true
    }
    var geoSuccess = function(position) {
        startPos = position;
        curr_lat = startPos.coords.latitude;
        curr_lon = startPos.coords.longitude;
        initMap();
    };
    var geoError = function(error) {
        console.log('Error occurred. Error code: ' + error.code);
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);

    document.getElementById("id-lat").innerHTML = curr_lat;
    document.getElementById("id-lon").innerHTML = curr_lon;



});






/*function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}*/

/*function changeGradient() {
  var gradient = [
    'rgba(255, 255, 0, 0)',
    'rgba(255, 255, 0, 1)',
    'rgba(255, 100, 0, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? 50 : 200);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}*/

// Heatmap data: 500 Points
function getPoints() {
    return [{ location: new google.maps.LatLng(9.982, 76.306), weight: 5 },

        { location: new google.maps.LatLng(9, 76), weight: 5 },
        { location: new google.maps.LatLng(9.982, 76.306), weight: 5 },
        { location: new google.maps.LatLng(9.982, 76.306), weight: 5 }
    ];
}