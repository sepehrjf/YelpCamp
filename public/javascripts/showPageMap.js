mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40],
    zoom: 10 // starting zoom
});

// new mapboxgl.Marker()
//     .setLngLat(campground.geometry.coordinates)
//     .addTo(map)