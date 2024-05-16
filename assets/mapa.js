function initMap() {
    const map = L.map('map').setView([-1.286389, 36.817223], 13); // Coordenadas de Nairobi, Kenia

    // Añadir la capa de mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Solicitar datos de BikeWise API
    $.ajax({
        url: 'https://bikewise.org:443/api/v2/incidents',
        data: {
            incident_type: 'theft', // Tipo de incidente (robo)
            proximity: 'Nairobi, Kenya', // Ubicación de proximidad
            proximity_square: 50 // Radio de proximidad en km
        },
        success: function(response) {
            const incidents = response.incidents;
            incidents.forEach(function(incident) {
                if (incident.addresses && incident.addresses.length > 0) {
                    const latitude = incident.addresses[0].latitude;
                    const longitude = incident.addresses[0].longitude;
                    if (latitude && longitude) {
                        const marker = L.marker([latitude, longitude])
                            .addTo(map)
                            .bindPopup(`<b>${incident.title}</b><br>${incident.description}`);
                    }
                }
            });
        },
        error: function(xhr, status, error) {
            console.error('Error al obtener datos de BikeWise:', error);
        }
    });
}

$(document).ready(function() {
    initMap();
});