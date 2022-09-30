let map = L.map("map").setView([-32.522779, -55.765835], 6);
let marker = L.marker([-32.522779, -55.765835]).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 30,
    attribution: "© OpenStreetMap",
}).addTo(map);

document
    .getElementById("select-location")
    .addEventListener("change", function(e) {
        let coords = e.target.value.split(",");
        map.flyTo(coords, 17);
    });