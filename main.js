let map = document.getElementById('map-image')
let offices = document.getElementById('offices');
let countryside = document.getElementById('countryside');
let parks = document.getElementById('parks');
let houses = document.getElementById('houses');
let industries = document.getElementById('industries');

offices.onmouseover = function () {
    map.src = './src/map-offices.png';
}
offices.onmouseout = function () {
    map.src = './src/map-original.png';
}

countryside.onmouseover = function () {
    map.src = './src/map-countryside.png';
}
countryside.onmouseout = function () {
    map.src = './src/map-original.png';
}

parks.onmouseover = function () {
    map.src = './src/map-parks.png';
}
parks.onmouseout = function () {
    map.src = './src/map-original.png';
}

houses.onmouseover = function () {
    map.src = './src/map-houses.png';
}
houses.onmouseout = function () {
    map.src = './src/map-original.png';
}

industries.onmouseover = function () {
    map.src = './src/map-industries.png';
}
industries.onmouseout = function () {
    map.src = './src/map-original.png';
}

