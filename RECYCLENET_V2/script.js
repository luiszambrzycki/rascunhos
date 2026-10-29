const mapa = L.map("map").setView([-29.7604, -51.1472], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", 
    {attribution: '&copy; OpenStreetMap'
    }).addTo(mapa);